import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../NavBar/navbar'
import Card from '../Card/card'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postMercadoPago } from '../../redux/actions'


export default function ShoppingCart() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')
  const [cart, /* setCart */] = useState(cartFromLocalStorage)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
}, [cart])

  const videogamesInCart = useSelector((state) => state.cart)
  const cartLocal = JSON.parse(localStorage.getItem('cart'))


  const handleDelete = (id) => {
    localStorage.setItem('cart', JSON.stringify(cartFromLocalStorage.filter(e => e.id !== id)))
    navigate('/my_cart')
  }

  const handleClearCart = () => {
    localStorage.setItem('cart', JSON.stringify([]))
    navigate('/my_cart')
  }

  const handleBuyMercadoPago = (carrito) => {
    dispatch(postMercadoPago(carrito))
    .then((data)=>{
          window.location.assign(data.data.init_point)
        })
        .catch(err => console.error(err))
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
      
      {
          cartFromLocalStorage.length > 0 ? 
          (
            <div style={{marginTop: '100px'}}>
              {
                cartFromLocalStorage.map((game) => (
                  <div>
                    <Card image={game.image} name={game.name} price={game.price} />
                    <button type='reset' onClick={() => handleDelete(game.id)}>Remove game from cart</button>
                  </div>
                  )
                )
              }
              <button onClick={() => handleClearCart()}>Clear cart</button>
              <Link to='/home'>
                <button>Back to the main page</button>
              </Link>
              <Link to='/store'>
                <button>Back to the store</button>
              </Link>
              
              <button onClick={() => {handleBuyMercadoPago(cartFromLocalStorage)}}>Buy</button>
              
            </div>
          ) :
          (
          <div>
            <h1 style={{marginTop: '100px'}}>No games in cart...</h1>
            <Link to='/home'>
              <button>Back to the main page</button>
            </Link>
            <Link to='/store'>
              <button>Back to the store</button>
            </Link>
          </div>
          )
        }
      </div>
    </div>
  )
}
