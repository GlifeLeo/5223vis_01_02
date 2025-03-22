'use client'
import React, { useEffect, useState } from 'react';
export const CartContext = React.createContext()

const products = [
  {
    name: "Gradient Graphic T-shirt",
    imageUrl: "https://picsum.photos/200/300",
    price: 145,
    rate: 4,
    discount: 0,
    id: 1
  },
  {
    name: "Polo with Tipping Details",
    imageUrl: "https://picsum.photos/200/300",
    price: 180,
    rate: 4,
    discount: 10,
    id: 2
  },
  {
    name: "Polo with Tipping Details",
    imageUrl: "https://picsum.photos/200/300",
    price: 200,
    rate: 3,
    discount: 30,
    id: 3
  },
  {
    name: "Slim Fit Chinos",
    imageUrl: "https://picsum.photos/200/300",
    price: 220,
    rate: 5,
    discount: 15,
    id: 4
  },
  {
    name: "Casual Denim Jacket",
    imageUrl: "https://picsum.photos/200/300",
    price: 350,
    rate: 4.5,
    discount: 20,
    id: 5
  },
  {
    name: "Hooded Sweatshirt",
    imageUrl: "https://picsum.photos/200/300",
    price: 275,
    rate: 4.2,
    discount: 10,
    id: 5
  },
  {
    name: "Crew Neck Sweater",
    imageUrl: "https://picsum.photos/200/300",
    price: 190,
    rate: 4.7,
    discount: 5,
    id: 6
  },
  {
    name: "Classic Leather Belt",
    imageUrl: "https://picsum.photos/200/300",
    price: 95,
    rate: 4.8,
    discount: 0,
    id: 7
  },
  {
    name: "High-Top Sneakers",
    imageUrl: "https://picsum.photos/200/300",
    price: 400,
    rate: 4.6,
    discount: 25,
    id: 8
  },
  {
    name: "Sports Joggers",
    imageUrl: "https://picsum.photos/200/300",
    price: 210,
    rate: 4.3,
    discount: 10,
    id: 9
  }
];

export const CartProvider = ({ children }) => {

  // const [slSpTrongCart, setSlSpTrongCart] = useState(0)
  // function themSl(slCanThem) {
  //   setSlSpTrongCart(slSpTrongCart + slCanThem)
  // }
  // function giamSl(slCanTru) {
  //   setSlSpTrongCart(slSpTrongCart - slCanTru)
  // }

  const [items, setItems] = useState([])

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]")
    if (cartItems.length) {
      setItems(cartItems)
    }
  }, [])
  function themSp(sp, sl) {
    let mangTamthoi = [...items]
    const index = mangTamthoi.findIndex(item => item.sp.id == sp.id)
    if (index > -1) {
      mangTamthoi[index].sl = mangTamthoi[index].sl + sl
      setItems(mangTamthoi)
      localStorage.setItem("cartItems", JSON.stringify(mangTamthoi, null, 2))
    }
    else {
      setItems([...items,
      {
        sp: sp,
        sl: sl
      }])
      localStorage.setItem("cartItems",
        JSON.stringify([...items,
        {
          sp: sp,
          sl: sl
        }], null, 2))
    }
  }

  function giamSlSp(sp, sl) { // sp can giam, sl can giam
    let mangTamthoi = [...items]
    const index = mangTamthoi.findIndex(item => item.sp.id == sp.id)
    if (index > -1) {
      mangTamthoi[index].sl = mangTamthoi[index].sl - sl
    }
    setItems(mangTamthoi)
    localStorage.setItem("cartItems", JSON.stringify(mangTamthoi, null, 2))
  }

  const slSpTrongCart = items.reduce((t, item) => t + item.sl, 0)
  return <CartContext.Provider value={{
    themSp,
    giamSlSp,
    items,
    slSpTrongCart,
    // themSl,
    // giamSl
  }}>
    {children}
  </CartContext.Provider>
}