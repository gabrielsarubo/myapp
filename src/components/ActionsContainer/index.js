import './index.css'

const ActionsContainer = ({
  questionStatus,
  correctAsnwer,
  handleVerify,
  handleContinue,
  handleFinish,
  isLoading
}) => {
  return (
    <div className="actions-container" data-state={questionStatus}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-7">
            <div className="content">
              <div className="content__left">
                <button className="btn btn-outline-secondary btn-lg" onClick={handleFinish}>Finalizar</button>
                {
                  (questionStatus !== 'unanswered') && (
                    <div className="input-group">
                      <span className="input-group-text" id="inputGroup-sizing-default">Resposta</span>
                      <input type="text" className="form-control" aria-describedby="inputGroup-sizing-default" defaultValue={correctAsnwer} readOnly />
                    </div>
                  )
                }
              </div>
              <div className="content__right">
                <button className={`btn btn-${questionStatus === 'unanswered' ? 'primary' : questionStatus === 'correct' ? 'success' : 'danger'} btn-lg`} onClick={questionStatus === 'unanswered' ? handleVerify : handleContinue}>
                  {
                    isLoading
                      ? ('Carregando...')
                      : questionStatus === 'unanswered'
                        ? ('Verificar')
                        : ('Continuar')
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActionsContainer
