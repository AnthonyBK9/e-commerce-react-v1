import React, { useState } from 'react'

const ProductInfoId = ({product}) => {
    const [counter, setCounter] = useState(1)

    const minusOne= () => {
        const minus = counter - 1;
        if (minus >= 1) {
            setCounter(minus)
        }
        // minus >= 1 && setCounter(minus)
    }

    const plusOne = () => setCounter(counter + 1)


    console.log(product)

  return (
    <article className="product-info">
        <h2 className="product-info__title">{product?.title}</h2>
        <p className="product-info__description">{product?.description}</p>
        <div className='card-product__price-container'>
          <h3 className='card-product__price-label'>Price</h3>
          <p className='card-product__price-number'>$ {product?.price}</p>
        </div>
        <div className="product-info__quantity-container">
            <div className="product-info__minus" onClick={minusOne}>-</div>
            <div>{counter}</div>
            <div className="product-info__plus" onClick={plusOne}>+</div>
        </div>
        <button>Add to Cart <i className="fa-solid fa-cart-plus"></i></button>
    </article>
  )
}

export default ProductInfoId