import Header from "../../components/Header"
import CategoryListItem from "../../components/CategoryListItem"

import './index.css'

const StudentHome = () => {
  const categoriesList = [
    { title: 'Classe Gramatical', desc: 'Uma breve descricao sobre o tipo de exercicio', iconUri: '📚' },
    { title: 'Tradução EN → PT', desc: 'Uma breve descricao sobre o tipo de exercicio', iconUri: '🌎' },
    { title: 'Tradução PT → EN', desc: 'Uma breve descricao sobre o tipo de exercicio', iconUri: '📝' },
  ]

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
              {
                categoriesList.length > 0
                  ? (
                    categoriesList.map((category, index) => {
                      return (
                        <CategoryListItem
                          iconUri={category.iconUri}
                          title={category.title}
                          desc={category.desc}
                          key={index}
                        />
                      )
                    })
                  )
                  : (<p>Não há categorias ainda.</p>)
              }
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default StudentHome
