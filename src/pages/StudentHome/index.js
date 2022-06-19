import { useNavigate } from "react-router-dom"

import Header from "../../components/Header"
import CategoryListItem from "../../components/CategoryListItem"

import './index.css'

const StudentHome = () => {
  const navigate = useNavigate()
  
  return (
    <>
      <Header />
      <div className="StudentHome">
        <div className="container mt-5">
          <header className="mb-4">
            <h3 className="title">Jane Doe</h3>
            <div className="badge-container">
              <div className="body">⚡ 1200 Pts</div>
            </div>
          </header>
          <main>
            <div className="categories-list">
              <CategoryListItem
                handleClick={() => navigate('/practice/grammar')}
                iconUri='📚'
                title='Classe Gramatical'
                desc='Uma breve descricao sobre o tipo de exercicio'
              />
              <CategoryListItem
                handleClick={() => navigate('/practice/translation')}
                iconUri='🌎'
                title='Tradução EN → PT'
                desc='Uma breve descricao sobre o tipo de exercicio'
              />
              <CategoryListItem
                handleClick={() => navigate('/practice/translation')}
                iconUri='📝'
                title='Tradução PT → EN'
                desc='Uma breve descricao sobre o tipo de exercicio'
              />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default StudentHome
