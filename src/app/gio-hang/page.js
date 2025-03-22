"use client";

import React, { useContext } from "react";
import CartItem from "@/app/components/CartItem";
import { CartContext } from "../contexts/CartProvider";
import Link from "next/link"
function ShoppingCart() {
  const cart = useContext(CartContext);

  // Calculate total price dynamically
  const subtotal = cart.items.reduce((acc, item) => acc + item.sp.price * item.sl, 0);
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="w-4/5 mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>

      {cart.items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Cart Items List */}
          <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Your Items</h2>
            <div className="divide-y">
              {cart.items.map((item, index) => (
                <CartItem
                  key={index}
                  giamSlSp={cart.giamSlSp}
                  themSp={cart.themSp}
                  imageUrl={item.sp.imageUrl}
                  price={item.sp.price}
                  name={item.sp.name}
                  color={item.sp.color}
                  sl={item.sl}
                  size={item.sp.size}
                  id={item.sp.id}
                />
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Discount (-20%)</span>
                <span className="font-medium">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className="font-medium">${deliveryFee.toFixed(2)}</span>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* Promo Code Input */}
            <div className="mt-4 flex space-x-2">
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full px-3 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <button className="px-4 py-2 bg-black text-white rounded-md">Apply</button>
            </div>

            {/* Checkout Button */}
            <button className="mt-4 w-full py-3 bg-black text-white rounded-lg flex justify-center items-center hover:bg-gray-900 transition">
              Go to Checkout <span className="ml-2">➡️</span>
            </button>
          </div>
        </div>
      ) : (
        <Link href="/san-pham" className="text-center text-gray-500 text-lg">
          <div className="text-center">
            No Items in Cart
          </div>
          <button className="mt-4 w-56 mx-auto py-3 bg-black text-white rounded-lg flex justify-center items-center hover:bg-gray-900 transition">
            Go to shopping <span className="ml-2">➡️</span>
          </button>
        </Link>
      )}
    </div>
  );
}

export default ShoppingCart;
