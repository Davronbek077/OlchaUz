import React from 'react'
import Banner from '../../components/banner/Banner'
import Category from '../../components/category/Category'
import Catalog from '../../components/catalog/Catalog'
import Product from '../../components/product/Product'
import { Data } from '../../mock/datamock'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <Catalog/>
      <Product data={Data} />
    </div>
  )
}

export default Home
