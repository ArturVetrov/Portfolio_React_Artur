import React from 'react'
import './style.css';

import whatsapp from './icons/whatsapp.svg'
import tg from './icons/tg.svg'
import gitHub from './icons/gitHub.svg'


function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://wa.me/+79647015703" target="_blank" rel="noreferrer"><img src={whatsapp} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://github.com/ArturVetrov" target="_blank" rel="noreferrer"><img src={gitHub} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://t.me/arturVetrov" target="_blank" rel="noreferrer"><img src={tg} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2023</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer