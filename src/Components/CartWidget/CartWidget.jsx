import React from 'react'
import './CartWidget.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
  return (
    <div className='cart-container'>
        <FontAwesomeIcon id='cart-icon' icon={faCartShopping} />
    </div>
  )
}

export default CartWidget