import React from 'react'
import navbarTop from '../../assets/navbarTop.jpg'
import olchaLogo from '../../assets/olchaLogo.png'
import './Navbar.css'

const NavbarTop = () => {
  return (
    <div className='navbar-top'>
      <div className="container">
      <div className="navbar-top-img">
      <img src={navbarTop} alt="" />
      </div>

      <div className="navbar-top-wrap">
            <div className="olcha-logo">
              <div className="olcha-logo-img">
              <img src={olchaLogo} alt="" />
              </div>
              <div className="olcha-logo-text">
                <h3>Olcha</h3>
                <p>Mobil ilovani yuklab oling</p>
              </div>
            </div>

            <div className="olcha-download-btn">
              <button>Yuklab olish</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default NavbarTop
