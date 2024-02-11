import React from 'react'
import "./Card.css"
import { AiFillStar } from 'react-icons/ai'
function Card({img,title,newprice,prevprice,review}) {
  return (
    <div>
          <div className='partie1-blog'>
            <div className='containerblog' >
              <div>
                
                  <img src={img} alt={title} className='image' onError={(e) => console.error("Erreur de chargement d'image", e)} />
                </div>
                <div>
              
                  <p className='title'>{title}</p>
                
              </div>
              <div className='card-reviews'>
                <AiFillStar className="rating-start"/>
                <AiFillStar className="rating-start"/>
                <AiFillStar className="rating-start"/>
                <AiFillStar className="rating-start"/>
                <p className='review'>{review}</p>
              </div>
              
              
              <div className='price'>
              
                  <p className='prevprice'>${prevprice}</p>
                  
                  <p className='newprice'>${newprice}</p>
              </div>
            </div>
          
     
    </div>

    </div>
  )
}

export default Card