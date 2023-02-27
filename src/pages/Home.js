import React from 'react'
import Header from './../components/header/Header'
import Skills from './../components/skills/Skills'
import {skills} from './../helpers/skillsList'

function Home() {
  return (
    <>
      <Header />

      <main className="section">
          <div className="container">
          <h2 className="title-2">Навыки</h2>
          <div className='skill-list'>
            {skills.map((skills, index) => {
              return <Skills key={index} title={skills.title} img={skills.img} />
            })}
          </div>
          </div>
      </main>
    </>
  )
}

export default Home