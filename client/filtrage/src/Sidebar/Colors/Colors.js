import React from 'react'
import "./Colors.css"
function Colors({handlechangeradio}) {
  return (
    <div>
       
        <div>
            <label className='sidebar-label-container color-title'>
                <input type="radio" name='test2'  />
                <span className='checkmark'></span>All
            </label>
            <label className='sidebar-label-container color-title'>
                <input type="radio" name='test2' onChange={handlechangeradio} value="Black"/>
                <span className='checkmark'></span>Black
            </label>
            <label className='sidebar-label-container color-title'>
                <input type="radio" name='test2' onChange={handlechangeradio} value="Yellow"/>
                <span className='checkmark'></span>Yellow
            </label>
            <label className='sidebar-label-container color-title'>
                <input type="radio" name='test2' onChange={handlechangeradio} value="red"/>
                <span className='checkmark'></span>Red
            </label>
            <label className='sidebar-label-container color-title'>
                <input type="radio" name='test2' onChange={handlechangeradio} value="green"/>
                <span className='checkmark'></span>Green
            </label>
            <label className='sidebar-label-container color-title'>
                <input type="radio" name='test2' onChange={handlechangeradio} value="white"/>
                <span className='checkmark'></span>White
            </label>
        </div>
    </div>
  )
}

export default Colors