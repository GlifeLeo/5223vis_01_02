import React from 'react'

function Categories() {

  const categories = [
    { name: "T-Shirts", id: 1 },
    { name: "Polo Shirts", id: 2 },
    { name: "Jeans & Chinos", id: 3 },
    { name: "Jackets & Coats", id: 4 },
    { name: "Hoodies & Sweatshirts", id: 5 },
    { name: "Sweaters & Cardigans", id: 6 },
    { name: "Shorts & Bermudas", id: 7 },
    { name: "Shoes & Sneakers", id: 8 },
    { name: "Bags & Backpacks", id: 9 },
    { name: "Belts & Accessories", id: 10 },
    { name: "Sportswear", id: 11 },
    { name: "Formal Wear", id: 12 },
    { name: "Watches & Jewelry", id: 13 },
    { name: "Socks & Underwear", id: 14 },
    { name: "Caps & Hats", id: 15 },
    { name: "Eyewear", id: 16 }
  ];


  return (
    <div className="overflow-x-auto no_scrollbar">
      <ul className='flex justify-between pt-12 text-white'>
        {categories.map((cat, index) => {
          return <li className="min-w-40 whitespace-nowrap" key={index}>{cat.name}</li>
        })}
      </ul>
    </div>
  )
}

export default Categories