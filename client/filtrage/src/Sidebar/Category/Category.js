import React from 'react'
import "./Category.css"
function Category({handlechangeradio}) {
  return (
    <div>
        <h2 className='sidebar-title'>Category</h2>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name='test'  />
                <span className='checkmark'></span>All
            </label>
            <label className='sidebar-label-container'>
                <input type="radio" name='test' onChange={handlechangeradio} value="sneakers" />
                <span className='checkmark'></span>Sneakers
            </label>
            <label className='sidebar-label-container' value="Flats">
                <input type="radio" name='test' onChange={handlechangeradio} />
                <span className='checkmark'></span>Flats
            </label>
            <label className='sidebar-label-container'>
                <input type="radio" name='test' onChange={handlechangeradio} value="Sandals"/>
                <span className='checkmark'></span>sandals
            </label>
            <label className='sidebar-label-container'>
                <input type="radio" name='test' onChange={handlechangeradio} value="Heels"/>
                <span className='checkmark'></span>Heels
            </label>
        </div>
    </div>
  )
}

export default Category