import React from 'react'

function Contacts() {
  return (
    <main className="section">
        <div className="container">
                <h1 className="title-1">Контакты</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Локация</h2>
                        <p>Москва, Россия</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79647015703">+7 (964) 701-57-03</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:artur97s@yandex.ru">artur97s@yandex.ru</a></p>
                    </li>
                </ul>

        </div>
    </main>
  )
}

export default Contacts