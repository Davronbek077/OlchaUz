import React from 'react'
import './Product.css'
import { CgShoppingCart } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { addToWishies, removeFromWishies } from '../../context/likeSlice'
import { incCart } from '../../context/cartSlice'

const Product = ({ data }) => {
  const dispatch = useDispatch()
  const likes = useSelector((state) => state.likes.value)
  return (
    <div className='product'>
      <div className="product-wrap">
        {data.map((item) => {
          return(
           <div className='product-card' key={item.id}>
            <div className="product-card-img">
              <Link to={`/product/${item.id}`}>
              <img src={item.url[0]} alt="" /></Link>
              
              {likes?.some((itemLike) => itemLike.id === item.id) ? (
                    <div
                      onClick={() => dispatch(removeFromWishies(item))}
                      className="filled-heart"
                    >
                      <FaHeart />
                    </div>
                  ) : (
                    <div
                      onClick={() => dispatch(addToWishies(item))}
                      className="empty-heart"
                    >
                      <CiHeart />
                    </div>
                  )}
            </div>
           <h3>{item.title}</h3>
           <div className="product-card-price">
           <p id='price'>{item.price} so'm</p>
           <p id='month'>{item.month}</p>
           </div>

           <div className="product-payment-wrap">
            <div className="product-basket">
            <CgShoppingCart id='basket' onClick={() => dispatch(incCart(item))}/>
            </div>

            <div className="product-payment">
              <button>Muddatli to'lov</button>
            </div>
           </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Product
