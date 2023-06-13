import React from 'react'
import '../styles/Footer.css'
const Footer = () => {
  return (
    <footer className='footer bg-dark'>
      <div className="social">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
      </div>
      <p>Copyright &copy; 2023 - EdgeLedger</p>
    </footer>
  )
}

export default Footer