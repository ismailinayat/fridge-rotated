import React from 'react'

function Card({name, img, price, currentSelected, cardNum}) {

  console.log(price)
  let cardClasses
  let btnClasses
  if (currentSelected === cardNum) {
    cardClasses = 'cardt selected';
    btnClasses = 'add-cart-btn btn-selected'
  } else {
    cardClasses = 'cardt'
    btnClasses = 'add-cart-btn'
  }

    return (
        <div>
            <div className={cardClasses}>
                  <div className="cardt__header">
                    <div className="cardt__picture">
                      <div className="cardt__picture-overlay">&nbsp;</div>
                      <img
                        src= {img}
                        alt={name}
                        className="cardt__picture-img"
                      />
                     
                    </div>

                  </div>

                  <div className="cardt__details">
                   
                    <div className="name"><h3>{name}</h3></div>
                   
                    <div className="price"><h3>{price}</h3></div>
                  </div>

                </div>

                <div className={btnClasses}><h3>Add to cart</h3></div>
        </div>
    )
}

export default Card
