import React, { useEffect } from 'react'
import NavBar from '../NavBar/navbar'
import {useSelector, useDispatch} from 'react-redux'
import { delFromCart, clearCart } from '../../redux/actions'
import Card from '../Card/card'
import {Link} from 'react-router-dom'

export default function ShoppingCart() {
  const dispatch = useDispatch()
  const videogamesInCart = useSelector((state) => state.cart)
  const cartLocal = JSON.parse(localStorage.getItem('cart'))

  const handleDelete = (id) => {
    dispatch(delFromCart(id));
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
      {
          (cartLocal.length !== 0 )? 
          (
            <div style={{marginTop: '100px'}}>
              {
                cartLocal.map((game) => (
                  <div>
                    <Card image={game.image} name={game.name} price={game.price} />
                    <button onClick={() => handleDelete(game.id)}>Remove game from cart</button>
                    <label>Units<input type="number" placeholder='1'/></label>
                  </div>
                  )
                )
              }
              <button>Buy</button>
              <button onClick={() => handleClearCart()}>Clear cart</button>
              <Link to='/home'>
                <button>Back to the main page</button>
              </Link>
              <Link to='/store'>
                <button>Back to the store</button>
              </Link>
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
