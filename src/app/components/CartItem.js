"use client"

import React from "react"

function CartItem({ id, imageUrl, price, name, color, size, sl, themSp, giamSlSp }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-5 border rounded-lg shadow-md bg-white">
      {/* Product Image */}
      <img className="w-full md:w-56 h-56 object-cover rounded-md" src={imageUrl} alt={name} />

      {/* Product Details */}
      <div className="flex flex-col justify-between w-full p-4">
        <div>
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-gray-600">Size: <span className="font-medium">{size}</span></p>
          <p className="text-gray-600">Color: <span className="font-medium">{color}</span></p>
        </div>

        {/* Price & Quantity Controls */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-2xl font-bold text-black">${price}</div>

          <div className="flex items-center border rounded-md bg-gray-100">
            <button
              onClick={() => sl > 1 && giamSlSp({ id }, 1)}
              className="px-4 py-2 text-xl bg-gray-300 hover:bg-gray-400 rounded-l-md"
            >
              -
            </button>
            <span className="px-6 text-lg">{sl}</span>
            <button
              onClick={() => themSp({ id }, 1)}
              className="px-4 py-2 text-xl bg-gray-300 hover:bg-gray-400 rounded-r-md"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
