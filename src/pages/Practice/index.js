import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../contexts/AuthContext'

import ActionsContainer from '../../components/ActionsContainer'

import './index.css'

const Practice = () => {
  // React Router
  const navigate = useNavigate()
  const params = useParams()
  const { categoryId } = params

  const { authData } = useContext(AuthContext)

  const [questionId, setQuestionId] = useState()
  const [questionText, setQuestionText] = useState()
  const [userAnswer, setUserAnswer] = useState()
  const [options, setOptions] = useState([])
  const [correctAsnwer, setCorrectAnswer] = useState()

  const [questionStatus, setQuestionStatus] = useState('unanswered')

  const [isLoading, setIsLoading] = useState(false)

  const loadQuestionAsync = async (categoryId, dificuldade) => {
    try {
      // fetch question from API
      const result = await axios
        .post(`${process.env.REACT_APP_BASE_URL}/questao/${categoryId}`, {
          dificuldade: dificuldade,
          colecao: categoryId
        }, {
          headers: {
            "x-jwt-token": authData.userToken
          }
        })

      return result.data
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    // Prevent app from making API calls to a category other than 'classeGramatical'
    if (categoryId !== 'classeGramatical') {
      setQuestionText('Não é possivel carregar questões deste tipo de categoria')
      return
    }

    loadQuestionAsync(categoryId, 'facil')
      .then((question => {
        setQuestionId(question.id)
        setQuestionText(question.palavra)
        setCorrectAnswer(question.resposta)
        setOptions(renderOptions(question.alternativas, question.resposta))
      }))
      .catch((error) => {
        console.log('Failed to fetch question: ', error)
      })
  }, [])

  /**
   * Render a shuffled list of options containing the user answer
   * @param {Array} options 
   * @param {Array} answer 
   * @returns shuffled options
   */
  const renderOptions = (options, answer) => {
    let _options = [...options, answer]
    _options = _options.sort(() => Math.random() - 0.5)
    return _options
  }

  const handleRadioChange = (e) => {
    const { value } = e.target
    setUserAnswer(value)
  }

  const handleContinue = () => {
    setQuestionStatus('unanswered')
    setIsLoading(true)

    // Send new history entry after user answered question
    axios.post(`${process.env.REACT_APP_BASE_URL}/history/new`, {
      categoryId: categoryId,
      questionId: questionId,
      userEmail: authData.userEmail,
      userAnswer: userAnswer,
      isAnswerCorrect: questionStatus === 'correct'
    }, {
      headers: {
        "x-jwt-token": authData.userToken
      }
    })
      .then(() => {
        console.log('Successfully created a new history entry')
      })
      .catch((err) => {
        console.log('Error trying to create a new history entry: ', err)
      })

    // Load a new question
    loadQuestionAsync(categoryId, 'facil')
      .then((question => {
        setQuestionId(question.id)
        setQuestionText(question.palavra)
        setCorrectAnswer(question.resposta)
        setOptions(renderOptions(question.alternativas, question.resposta))
      }))
      .catch((error) => {
        console.log('Failed to fetch question: ', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleVerify = () => {
    if (userAnswer.toLowerCase() === correctAsnwer.toLowerCase()) {
      setQuestionStatus('correct')
    } else {
      setQuestionStatus('incorrect')
    }
  }

  const handleFinish = () => {
    navigate('/student')
  }

  const renderQuestionLayout = () => {
    if (params.categoryId === 'classeGramatical') {
      return (
        <>
          <h3 className='mb-4'>Escolha a classe gramatical</h3>
          <div className="question-title">{questionText || 'Carregando pergunta...'}</div>
          <div className="container-options row gy-2 mt-3">
            {
              options.length > 0 && options.map((option, index) => {
                return (
                  <div className="col-12" key={(index + 1) * Math.random()}>
                    <input type="radio" className="btn-check" name="options" id={`option${index}`} value={option} onChange={handleRadioChange} autoComplete="off" />
                    <label className="btn btn-outline-secondary options w-100" htmlFor={`option${index}`}>{option}</label>
                  </div>
                )
              })
            }
          </div>
        </>
      )
    } else {
      return (
        <>
          <h3 className='mb-4'>Escreva em inglês</h3>
          <div className="question-title">{questionText || 'Carregando pergunta...'}</div>
          <textarea className="question-answer" value={userAnswer} onChange={e => setUserAnswer(e.target.value)} placeholder='Digite sua resposta'></textarea>
        </>
      )
    }
  }

  return (
    <div className="Practice container-fluid">
      {/* Main container */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-8 col-lg-6">
          <div className="question-container">
            {renderQuestionLayout()}
          </div>
        </div>
      </div>

      {/* Actions container */}
      <ActionsContainer
        questionStatus={questionStatus}
        correctAsnwer={correctAsnwer}
        handleVerify={handleVerify}
        handleContinue={handleContinue}
        handleFinish={handleFinish}
        isLoading={isLoading}
      />
    </div>
  )
}

export default Practice
