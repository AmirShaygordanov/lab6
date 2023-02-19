import React from 'react';
import { useNavigate,Link } from 'react-router-dom';

function Cart({ cart, login,order,setOrder,setCart}) {
  const navigate = useNavigate();

  const addToOrder = () => {
    setOrder([...cart])
    setCart([])
  }

  console.log(order)
  return (
    <div className='container cart'>
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
      {login ? (
        <div>
          <h2>Корзина</h2>
          <p className='cart'>
            {cart.map((item) => (
              <div className='cart-block'>
                <p>{item.name}</p>
              </div>
            ))}
          </p>
          <Link to="/order">
          <button onClick={() => addToOrder()} className='btn'>Оформить заказ</button></Link>
        </div>
      ) : (
        <p>Пожалуйста авторизуйстесь.</p>
      )}
      
    </div>
  );
}

export default Cart;
