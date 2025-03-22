"use client"

import React, { useState, useEffect, useContext } from "react"
import { useParams } from "next/navigation"
import { CartContext } from "@/app/contexts/CartProvider"
import { products } from "@/backend/index"
import Reviews from "@/app/components/Review"

function SpChiTiet() {
  const params = useParams()
  const productId = params?.productId || ""
  const cart = useContext(CartContext)

  const [sanpham, setSanPham] = useState(null)
  const [sl, setSl] = useState(1)

  useEffect(() => {
    const spDalayTuDatabase = products.find(({ id }) => String(id) === productId)
    setSanPham(spDalayTuDatabase)
  }, [productId])

  function tangSlThem1() {
    setSl(sl + 1)
  }

  function giam1Sl() {
    if (sl > 1) setSl(sl - 1)
  }

  function addToCart() {
    cart.themSp(sanpham, sl)
  }

  function buyNow() {
    cart.themSp(sanpham, sl)
    // Redirect user to checkout (if implemented)
  }

  if (!sanpham) return null

  return (
    <div className="w-4/5 mx-auto">
      {/* Breadcrumb Navigation */}
      <div className=" mx-auto py-4 text-gray-500 text-sm">
        <span className="hover:text-black cursor-pointer">Home</span> {" > "}
        <span className="hover:text-black cursor-pointer">Products</span> {" > "}
        <span className="text-black font-semibold">{sanpham.name}</span>
      </div>

      <div className="flex flex-col md:flex-row mx-auto py-10 ">
        {/* Product Image */}
        <div className="md:w-1/2 flex justify-center h-96 mr-10">
          <img
            src={sanpham.imageUrl}
            alt={sanpham.name}
            className="w-full rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold">{sanpham.name}</h1>
          <p className="text-lg text-gray-500 mt-1">Category: <span className="font-semibold">{sanpham.category}</span></p>
          <p className="text-lg text-gray-500">Tags: <span className="font-semibold">{sanpham.tags?.join(", ")}</span></p>

          <p className="text-xl text-gray-700 mt-2">Price:
            <span className="font-semibold text-black"> ${sanpham.price}</span>
          </p>
          <p className="text-lg text-yellow-500 mt-1">⭐ {sanpham.rate} / 5</p>

          {/* Stock Status */}
          <p className={`mt-2 text-sm font-semibold ${sanpham.stock > 0 ? "text-green-600" : "text-red-500"}`}>
            {sanpham.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          {/* Product Description */}
          <p className="text-gray-700 mt-4 leading-relaxed">
            {sanpham.description || "No product description available."}
          </p>

          {/* Quantity Selector & Buttons */}
          <div className="flex items-center mt-6 gap-6">
            <div className="flex items-center border rounded-lg px-4 py-2">
              <button onClick={giam1Sl} className="text-lg px-3 py-1 hover:bg-gray-200 rounded">-</button>
              <span className="mx-4 text-lg font-semibold">{sl}</span>
              <button onClick={tangSlThem1} className="text-lg px-3 py-1 hover:bg-gray-200 rounded">+</button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row mt-6 gap-4">
            <button
              onClick={addToCart}
              className="w-full md:w-auto bg-black text-white rounded-full py-2 px-6 text-lg font-semibold transition hover:bg-gray-800"
            >
              Add to Cart 🛒
            </button>
            <button
              onClick={buyNow}
              className="w-full md:w-auto bg-red-600 text-white rounded-full py-2 px-6 text-lg font-semibold transition hover:bg-red-500"
            >
              Buy Now 🚀
            </button>
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  )
}

export default SpChiTiet
