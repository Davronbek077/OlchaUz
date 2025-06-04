import { Routes, Route } from 'react-router-dom'
import NavbarBottom from './components/navbar/NavbarBottom.jsx'
import NavbarMiddle from './components/navbar/NavbarMiddle.jsx'
import NavbarTop from './components/navbar/NavbarTop.jsx'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Likes from './pages/likes/Likes.jsx'
import Basket from './pages/basket/Basket.jsx'
import SingleRoute from './pages/singleRoute/SingleRoute.jsx'
import { data } from './mock/datamock.js'
import Footer from './components/footer/Footer.jsx'


function App() {

  return (
    <>
      <NavbarTop/>
      <NavbarMiddle/>
      <NavbarBottom/>
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/likes' element={<Likes/>} />
        <Route path='/basket' element={<Basket/>} />
        <Route path='/product/:id' element={<SingleRoute/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
