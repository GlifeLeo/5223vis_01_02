import React from 'react'

function ShoppingCart() {

  const items = [
    {
      imageUrl: "https://picsum.photos/200/300",
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      qty: 1
    },
    {
      imageUrl: "https://picsum.photos/200/300",
      name: "CHECKERED SHIRT",
      size: "Medium",
      color: "Red",
      price: 180,
      qty: 1
    },
    {
      imageUrl: "https://picsum.photos/200/300",
      name: "SKINNY FIT JEANS",
      size: "Large",
      color: "Blue",
      price: 240,
      qty: 1
    }
  ]
  return (
    <div className="w-4/5 mx-auto ">
      <div className='text-3xl py-10'>ShoppingCart</div>
      <div className='flex w-full'>
        <div className='w-full'>
          List
          {items.map()}

        </div>
        <div className='w-1/3'>Order summary</div>
      </div>
    </div>
  )
}

export default ShoppingCart