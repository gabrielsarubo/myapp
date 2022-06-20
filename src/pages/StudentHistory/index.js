import Header from '../../components/Header'
import SummaryCard from '../../components/SummaryCard'

import './index.css'

const StudentHistory = () => {
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

  return (
    <>
      <Header />

      <div className="StudentHistory">
        <div className="container mt-5">
          <main>
            {/* Resumo do historico */}
            <div className="history-summary mb-5">
              <h4 className='mb-4'>Resumo do histórico</h4>
              <div className="SummaryCard-wrapper">
                <div className="SummaryCard-wrapper">
                  <SummaryCard info={{ title: 100, desc: 'Questões respondidas' }} />
                  <SummaryCard info={{ title: 100, desc: 'Acertos em questões fáceis' }} />
                  <SummaryCard info={{ title: 100, desc: 'Erros em questões fáceis' }} />
                  <SummaryCard info={{ title: 100, desc: 'Acertos em questões difíceis' }} />
                  <SummaryCard info={{ title: 100, desc: 'Erros em questões difíceis' }} />
                  {/* {Object.keys(summary).map((key, index) => {
                      return <SummaryCard info={summary[key]} key={key} />
                    })} */}
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
