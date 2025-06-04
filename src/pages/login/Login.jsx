import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className='login'>
      <form>
        <h2>Tizimga kirish yoki profil yaratish</h2>
        <p>Telefon raqami</p>
        <input type="text" placeholder=' +998 00 000 00 00' />
        <div className="form-btn">
        <button>Tasdiqlash</button>
        </div>
      </form>
    </div>
  )
}

export default Login
