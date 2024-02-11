import React from 'react'
import "./Recommended.css"
function Recommended({handleclick}) {
  return (
    <div>
        <h2 className='recommended-title'>Recommmended</h2>
        <div className="recommended-btns">
            <button className='btns' onClick={handleclick} >All Products</button>
            <button className='btns' onClick={handleclick} value="Nike">Nike</button>
            <button className='btns'  onClick={handleclick} value="Adidas">Adidas</button>
            <button className='btns' onClick={handleclick} value="Puma">Puma</button>
            <button className='btns' onClick={handleclick} value="Vans">Vans</button>
        </div>
    </div>
  )
}

export default Recommended