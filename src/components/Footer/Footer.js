import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className='footer'>
      <p>&copy; <span onClick={jonah}>Jonah Hansen |</span> <span onClick={lucas}>Lucas Rodrigues |</span> <span onClick={adam}>Adam Pietrangelo |</span> <span onClick={marcelo}>Marcelo Brasil</span></p>
    </footer>
  )

  function jonah() {
    window.location.href = "https://www.linkedin.com/in/jonah-hansen-dev/"
  }

  function lucas() {
    window.location.href = "https://www.linkedin.com/in/lucasoctavianorodrigues/"
  }

  function adam() {
    window.location.href = "https://www.linkedin.com/in/adam-pietrangelo-dev/"
  }

  function marcelo() {
    window.location.href = "https://www.linkedin.com/in/marcelo-vital-brasil/"
  }
}
