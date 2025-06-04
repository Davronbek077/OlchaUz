import React from 'react'
import { Data } from '../../mock/category'
import './Category.css'

const Category = () => {
  return (
    <div className='category'>
      <div className="category-wrap">
        {Data.map((item) => {
            return(
                <div key={item.id} className="category-card">
                    <img src={item.url[0]} alt="" />
                    <h3>{item.title} </h3>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Category
