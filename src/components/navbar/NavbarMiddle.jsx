import React from 'react'
import './Navbar.css'
import { IoCallOutline } from "react-icons/io5";
import olcha from '../../assets/olcha.png'

const NavbarMiddle = () => {
  return (
    <div className='navbar-middle'>
      <div className="container">
        <div className="navbar-middle-wrapper">

          <div className="navbar-middle-text">
          <h2 id='color'>0% Muddatli to'lov</h2>
          <h2 id='border'>Chegirmalar</h2>
          <div className="text-wrap">
          <h2 id='color'>Yutuqli o'yinlar</h2>
          <h2>Sayt xaritasi</h2>
          </div>
          </div>

          <div className="navbar-middle-number">
            <h2 id='number'>+998 (71) 202 202 1</h2>
            <h2 id='text'>olcha da soting</h2>
          </div>
          <div className="navbar-middle-lang">
            <h3 id='uz'>Ўзб</h3>
            <h3>O'z</h3>
            <h3 id='ru'>Рус</h3>
          </div>
          
          <div className="navbar-middle-wrap">
            <div className="call-icon">
            <IoCallOutline id='call-icon' />
            </div>
            
            <div className="navbar-middle-img">
              <img src={olcha} alt="" />
            </div>

            <div className="middle-lang">
              <h3>O'z</h3>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default NavbarMiddle
