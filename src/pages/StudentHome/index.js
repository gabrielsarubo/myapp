import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom"

import Header from "../../components/Header"
import CategoryListItem from "../../components/CategoryListItem"
import { AuthContext } from '../../contexts/AuthContext';

import './index.css'

const StudentHome = () => {
  const navigate = useNavigate()
  const { authData } = useContext(AuthContext)

  return (
    <>
      <Header />
      <div className="StudentHome">
        <div className="container mt-5">
          <header className="mb-4">
            <h3 className="title">{authData.userName}</h3>
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
