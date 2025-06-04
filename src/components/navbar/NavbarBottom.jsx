import React from 'react'
import olcha from '../../assets/olcha.png'
import { IoMdMenu } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { BiBarChart } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HiOutlineHome } from "react-icons/hi";
import './Navbar.css'


const NavbarBottom = () => {

  const likes = useSelector((state) => state.likes.value);
  const cards = useSelector((state) => state.cart.value);

  return (
    <div className='navbar-bottom'>
      <div className="container">
        <div className="navbar-bottom-wrapper">
          <div className="navbar-bottom-img">
            <Link to={"/"}><img src={olcha} alt="" /></Link>
          </div>

          <div className="navbar-bottom-catalog" >
          <IoMdMenu id='menu'/>
          <div className="catalog-text">
          <h2>Katalog</h2>
          </div>
          </div>

          <div className="navbar-bottom-input">
            <input type="text" placeholder='Katalog boyicha qidirish'/>
            <div className="input-icon"><FiSearch id='search' /></div>
          </div>

          <div className="navbar-bottom-collection">
            <div id='hides' className="collection">
            <BiBarChart id='icon'/>
            <p>Taqqoslash</p>
            </div>

            <div id='home' className="collection">
            <Link to={"/"}><HiOutlineHome id='icon'/>
            <p>Asosiy</p></Link>
            </div>

            <div className="collection">
            <Link to={"/likes"}>
            <div className="likes">
            <FaRegHeart id='icon'/>
            {likes.length > 0 && (<div className="like-items">
            {likes.length > 0 ? <p id='like'>{likes.length} </p> : null} 
            </div>)}
            </div>
            <p>Sevimlilar</p></Link>
            </div>

            <div className="collection">
            <Link to={"/basket"}>
            <div className="cards">
            <CgShoppingCart id='icon'/>
            <div className="cards-length">
            <p>{cards.length} </p>
            </div>
            </div>
            <p>Savatcha</p></Link>
            </div>

            <div className="collection">
            <Link to={"/login"}><AiOutlineUser id='icon'/>
            <p>Kirish</p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarBottom
