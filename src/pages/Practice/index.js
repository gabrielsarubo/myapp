import './index.css'

export const PracticeTranslation = () => {
  return (
    <div className="Practice container-fluid">
      {/* Main container */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-8 col-lg-6">
          <div className="question-container">
            <h3 className='mb-4'>Escreva em inglês</h3>
            <div className="question-title">O gato está comendo a maçã.</div>
            <textarea className="question-answer" value='The cat is eating an apple.'></textarea>
          </div>
        </div>
      </div>

      {/* Actions container */}
      <div className="actions-container" data-state='initial'>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="content">
                <div className="content__left">
                  <div className="btn btn-outline-secondary btn-lg">Finalizar</div>
                </div>
                <div className="content__right">
                  <div className="btn btn-primary btn-lg">Verificar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const PracticeGrammar = () => {
  return (
    <div className="Practice container-fluid">
      {/* Main container */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-8 col-lg-6">
          <div className="question-container">
            <h3 className='mb-4'>Escolha a classe gramatical</h3>
            <div className="question-title">Ineffable</div>
            <div className="container-options row gy-2 mt-3">
              <div className="col-12">
                <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" />
                <label className="btn btn-outline-secondary options w-100" htmlFor="option1">Substantivo</label>
              </div>
              <div className="col-12">
                <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" />
                <label className="btn btn-outline-secondary options w-100" htmlFor="option2">Adjetivo</label>
              </div>
              <div className="col-12">
                <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" />
                <label className="btn btn-outline-secondary options w-100" htmlFor="option3">Verbo</label>
              </div>
              <div className="col-12">
                <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" />
                <label className="btn btn-outline-secondary options w-100" htmlFor="option3">Preposição</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions container */}
      <div className="actions-container" data-state='correct'>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="content">
                <div className="content__left">
                  {/* <div className="btn btn-outline-secondary btn-lg">Finalizar</div> */}
                </div>
                <div className="content__right">
                  <div className="btn btn-success btn-lg">Continuar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
