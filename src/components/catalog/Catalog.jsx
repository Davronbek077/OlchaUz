import React from 'react'
import catalog1 from '../../assets/catalog1.png'
import catalog2 from '../../assets/catalog2.png'
import catalog3 from '../../assets/catalog3.png'
import './Catalog.css'

const Catalog = () => {
  return (
    <div className='catalog'>
      <div className="catalog-wrap">
        <div className="catalog-img">
            <img src={catalog1} alt="" />
        </div>

        <div className="catalog-img">
            <img src={catalog2} alt="" />
        </div>

        <div className="catalog-img">
            <img src={catalog3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Catalog
