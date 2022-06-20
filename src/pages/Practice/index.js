import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import ActionsContainer from '../../components/ActionsContainer'

import './index.css'

const Practice = () => {
  // React Router
  const navigate = useNavigate()
  const params = useParams()

  const [questionText, setQuestionText] = useState()
  const [userAnswer, setUserAnswer] = useState()

  const [correctAsnwer, setCorrectAnswer] = useState()

  const [questionStatus, setQuestionStatus] = useState('unanswered')

  const loadQuestionAsync = () => {
    return {
      id: "WBfI6Px5SLDdslkOf8c1",
      palavra: "porta",
      resposta: "door",
      alternativas: [
        "light",
        "house",
        "car"
      ]
    }
  }

  useEffect(() => {
    console.log(params.categoryId)

    // Nao fazer chamadas asincronas dentro do useEffect
    // encontrar outra forma de fazer isso
    const question = loadQuestionAsync()
    setQuestionText(question.palavra)
    setCorrectAnswer(question.resposta)

  }, [])

  const handleContinue = () => {
    alert('Next question')

    setQuestionStatus('unanswered')
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
          <div className="question-title">{questionText}</div>
          <div className="container-options row gy-2 mt-3">
            {
              ['substantivo', 'adjetivo', 'verbo', 'preposição'].map((option, index) => {
                return (
                  <div className="col-12" key={index}>
                    <input type="radio" className="btn-check" name="options" id={`option${index}`} autoComplete="off" />
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
      />
    </div>
  )
}

export default Practice
