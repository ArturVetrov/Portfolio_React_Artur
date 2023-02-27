import React from 'react'
import './style.css'

function Skills(props) {
  return (
    <div className="skill-list__page">
        <img src={props.img} alt={props.title} className="skill-list__img" />
        <h3 className="skill-list__title">{props.title}</h3>
      </div>
  )
}

export default Skills