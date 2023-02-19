import React from 'react'
import { NavLink } from 'react-router-dom'


function Header({ len,login,setLogin,lenOrder }) {
  return (
    <div className='header'>
        <p className='login' style={login ? {color:"green"} : {color:"red"}}>{login ? "АВТОРИЗОВАН" : "НЕАВТОРИЗОВАН"}</p>  

         <NavLink to="/">
                    <p className='titleBTN'>Питомцы</p>
                </NavLink> 
                <NavLink to="/reg">
                    <p className='titleBTN'> Регистрация</p>
                </NavLink>

                <NavLink to="/login">
                    <p className='titleBTN'> Логин</p>
                </NavLink>

                { login ? <NavLink to="/order">
                    <p className='titleBTN'>Заказ
                    {lenOrder ? <p className='count tilt-shaking'> | {lenOrder}</p> : ""}
                    </p>
                 </NavLink> : ""  }

        { login ? <NavLink to="/cart">
                    <p className='titleBTN counted'>Корзина
                    {len ? <p className='count tilt-shaking'> | {len}</p> : ""}
                    </p>
                 </NavLink> : "" }

        { login ? <NavLink to="/">
                    <p className='titleBTN exit' onClick={() => setLogin(false)}>Выйти</p>
                 </NavLink> : ""  }
    </div>
  )
}

export default Header