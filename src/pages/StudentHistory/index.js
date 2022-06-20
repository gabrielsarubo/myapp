import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import SummaryCard from '../../components/SummaryCard'

import './index.css'

const StudentHistory = () => {
  const [summary, setSummary] = useState({
    total: 0,
    correctEasy: 0,
    incorrectEasy: 0,
    correctHard: 0,
    incorrectHard: 0,
  })
  
  const userFullReport = [
    {
      category: "classeGramatical",
      userAnswer: "adjetivo",
      isAnswerCorrect: false,
      question: {
        text: "tree",
        level: "facil"
      }
    },
    {
      category: "classeGramatical",
      userAnswer: "substantivo",
      isAnswerCorrect: true,
      question: {
        text: "tree",
        level: "facil"
      }
    },
    {
      category: "enPt",
      userAnswer: "árvore",
      isAnswerCorrect: true,
      question: {
        text: "tree",
        level: "facil"
      }
    }
  ]

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

  useEffect(() => {
    const summary = generateSummarizedReport(userFullReport)

    setSummary(summary)
  }, [])

  return (
    <>
      <Header />

      <div className="StudentHistory">
        <div className="container mt-5">
          <main>
            {/* Resumo do historico */}
            <div className="history-summary mb-4">
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
                      userFullReport.length ? (
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
