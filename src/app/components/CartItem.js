"use client"

import React, { useEffect, useState } from 'react'

function CartItem({ imageUrl, price, name, color, size, sl }) {

  const [qty, setQty] = useState(sl)
  return (
    <div
      className='flex gap-4 my-5'>
      <img className='w-40 h-40 object-cover' src={imageUrl} />
      <div className='w-full'>
        <div className='text-3xl'>{name}</div>
        <div>Size: {size}</div>
        <div>Color: {color}</div>
        <div className='text-4xl font-bold'>${price}</div>
        <div className='text-2xl flex gap-x-10 justify-end'>
          <button onClick={() => {
            if (qty == 1) return
            setQty(qty - 1)
          }}>-</button>
          <div className='mx-10'> {qty}</div>
          <button onClick={() => {
            setQty(qty + 1)
          }}>+</button>
        </div>
      </div>

    </div>
  )
}

export default CartItem