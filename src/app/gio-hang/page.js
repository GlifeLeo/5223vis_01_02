import React from 'react'
import CartItem from "@/app/components/CartItem"
function ShoppingCart() {

  const items = [
    {
      imageUrl: "https://picsum.photos/200/300",
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      sl: 1
    },
    {
      imageUrl: "https://picsum.photos/200/300",
      name: "CHECKERED SHIRT",
      size: "Medium",
      color: "Red",
      price: 180,
      sl: 1
    },
    {
      imageUrl: "https://picsum.photos/200/300",
      name: "SKINNY FIT JEANS",
      size: "Large",
      color: "Blue",
      price: 240,
      sl: 1
    }
  ]

  // mang sau khi map [<CartItem />, <CartItem />, <CartItem />]
  return (
    <div className="w-4/5 mx-auto ">
      <div className='text-3xl py-10'>ShoppingCart</div>
      <div className='flex w-full'>
        <div className='w-full divide-y-2'>
          {/* List */}
          {
            items.map((item, index) => {
              return <div key={index}>
                <CartItem
                  imageUrl={item.imageUrl}
                  price={item.price}
                  name={item.name}
                  color={item.color}
                  sl={item.sl}
                  size={item.size}
                />
              </div>
            })
          }
        </div>
        <div className='w-1/3'>Order summary</div>
      </div>
    </div>
  )
}

export default ShoppingCart

// name={pro.name}
// imageUrl={pro.imageUrl}
// price={pro.price}
// size={pro.size}
// color={pro.color}
// sl={pro.sl}