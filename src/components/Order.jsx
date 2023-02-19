import React from 'react'
import { useNavigate } from 'react-router-dom'
 

function Order({ order,login }) {

const navigate = useNavigate()

  return (
    <div className='container'>
        <button className='btnICON' onClick={() => navigate(-1)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-6 h-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75'
          />
        </svg>
      </button>
        {login ? 
             order.map((order) => (
                <div className='cart-block'>{order.name}</div>
            )) : <p>Пожалуйста авторизуйстесь.</p>
        }
    </div>
  )
}

export default Order