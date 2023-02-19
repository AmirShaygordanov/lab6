import React from 'react'

function HomePage({ pets,cart,setCart,login }) {

    const addToCart = (index,item) => {
        if (cart.find(x => x.index === index) === undefined) {
            setCart([...cart, item])
        }
      }

    console.log(pets)

  return (
    <div className='grid-img'>
        {
            pets.map((item,index) => (
                <div>
                    <div className = "block">
                        <p>{item.name}</p>
                        {login ? <button className='btn' onClick={() => addToCart(index,item)}>Добавить в корзину</button> : ""}
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default HomePage