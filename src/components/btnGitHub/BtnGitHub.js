import React from 'react'
import './style.css'
import githubIcon from './gitHub-black.svg'

function BtnGitHub({link}) {
  return (
      <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
          <img src={githubIcon} alt="" />
          GitHub repo
      </a>
  )
}

export default BtnGitHub