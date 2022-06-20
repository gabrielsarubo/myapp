import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import axios from 'axios'

import Header from '../../components/Header'
import SummaryCard from '../../components/SummaryCard'

import './index.css'

const StudentHistory = () => {
  const { authData } = useContext(AuthContext)

  const [userFullReport, setUserFullReport] = useState([])
  const [summary, setSummary] = useState({
    total: 0,
    correctEasy: 0,
    incorrectEasy: 0,
    correctHard: 0,
    incorrectHard: 0,
  })

  // Aux states
  const [isLoading, setIsLoading] = useState(false)

  const generateSummarizedReport = (fullReport) => {
    let correctEasy = 0
    let incorrectEasy = 0
    let correctHard = 0
    let incorrectHard = 0

    fullReport.forEach(entry => {
      if (entry.isAnswerCorrect) {
        if (entry.question.level === 'facil') {
          correctEasy++
        } else {
          correctHard++
        }
      } else {
        if (entry.question.level === 'facil') {
          incorrectEasy++
        } else {
          incorrectHard++
        }
      }
    })

    const summary = {
      total: fullReport.length,
      correctEasy,
      incorrectEasy,
      correctHard,
      incorrectHard
    }

    return summary
  }

  const fetchData = async () => {
    setIsLoading(true)

    try {
      // fetch user report
      const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/report/${authData.userEmail}`, { headers: { "x-jwt-token": authData.userToken } })
      const data = result.data
      console.log(data)

      setUserFullReport(data)
      const summary = generateSummarizedReport(data)
      setSummary(summary)
    } catch (err) {
      // set request error message
      console.log('Failed to fetch user full report: ', err)
    } finally {
      setIsLoading(false)
    }
  }

  const renderButton = () => {
    return (
      <div className="btn btn-dark" onClick={() => fetchData()}>
        <span className="me-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-in-down" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z" />
            <path fillRule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
          </svg>
        </span>
        {isLoading ? 'Importando...' : 'Carregar Histórico'}
      </div>
    )
  }

  return (
    <>
      <Header />

      <div className="StudentHistory">
        <div className="container mt-5">
          <main>
            {/* Resumo do historico */}
            <div className="history-summary mb-4">
              <div className="mb-4">{renderButton()}</div>
              <h4 className='mb-4'>Resumo do histórico</h4>
              <div className="SummaryCard-wrapper">
                <div className="SummaryCard-wrapper">
                  <SummaryCard info={{ title: summary.total, desc: 'Questões respondidas' }} />
                  <SummaryCard info={{ title: summary.correctEasy, desc: 'Acertos em questões fáceis' }} />
                  <SummaryCard info={{ title: summary.incorrectEasy, desc: 'Erros em questões fáceis' }} />
                  <SummaryCard info={{ title: summary.correctHard, desc: 'Acertos em questões difíceis' }} />
                  <SummaryCard info={{ title: summary.incorrectHard, desc: 'Erros em questões difíceis' }} />
                </div>
              </div>
            </div>

            {/* Historico completo */}
            <div className="history-full">
              <h4 className='mb-4'>Histórico completo</h4>
              {/* Container for the table wrapper */}
              <div className="table-wrapper">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Categoria</th>
                      <th scope="col">Questão</th>
                      <th scope="col">Resposta</th>
                      <th scope="col">Acerto</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      // Returns rows populated with the data of one User Full Report
                      userFullReport.length > 0 ? (
                        userFullReport.map((reportEntry, index) => {
                          return (
                            <tr key={index}>
                              <th scope="row">{reportEntry.category}</th>
                              <td>{reportEntry.question.text}</td>
                              <td>{reportEntry.userAnswer}</td>
                              <td>{reportEntry.isAnswerCorrect ? '✔' : '❌'}</td>
                            </tr>
                          )
                        })
                      ) : (
                        <tr>
                          <td colSpan="5" className="text-muted">Nenhum informação ainda.</td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default StudentHistory
