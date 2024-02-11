import React from 'react'
import Category from './Category/Category'
import Colors from './Colors/Colors'
import Price from './Price/Price'
import "./Sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function Sidebar({handlechangeradio}) {
  return (
    <div>
        <section className='sidebar'>
            <div className='logo-container'>
            <FontAwesomeIcon icon={faShoppingCart} className='icon' />
            </div>
            <Category handlechangeradio={handlechangeradio}/>
          
            <Price handlechangeradio={handlechangeradio}/>
            <Colors handlechangeradio={handlechangeradio}/>
        </section>

    </div>
  )
}

export default Sidebar