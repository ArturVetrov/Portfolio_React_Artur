import React from 'react'
import './style.css';

function Header() {
  return (
      <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong> Привет, меня зовут <em> Артур </em></strong><br/>
                я frontend разработчик
            </h1>
            {/* <div className="header__text">
                <p></p>
            </div> */}
            <a href="https://drive.google.com/file/d/1zyRNAT8R6iajLrWjnmUCTgBbsJ6eO9V0/view?usp=sharing" target="_blank" rel="noreferrer" className="btn">Открыть CV</a>
        </div>
    </header>
  )
}

export default Header