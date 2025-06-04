import React from 'react'
import Banner from '../../components/banner/Banner'
import Category from '../../components/category/Category'
import Catalog from '../../components/catalog/Catalog'
import Product from '../../components/product/Product'

const Home = ({data}) => {
  return (
    <div>
      <Banner/>
      <Category/>
      <Catalog/>
      <Product data={data} />
    </div>
  )
}

export default Home