import React from 'react'

function Home(props) {

  const products = [
    { id: 1, name: "iPhone", price: 1200, category: "Electronics", isAvailable: true },
    { id: 2, name: "T-shirt", price: 20, category: "Clothing", isAvailable: false },
    { id: 3, name: "Laptop", price: 1500, category: "Electronics", isAvailable: true },
    { id: 4, name: "Shoes", price: 50, category: "Clothing", isAvailable: true },
    { id: 5, name: "Watch", price: 100, category: "Accessories", isAvailable: false },
  ];

  let minProduct = products[0]
  products.forEach(product => {
    if (product.price < minProduct.price) {
      minProduct = product
    }
  })

  function tiemkiemtukhoa(tukhoa) {
    let name = ""
    products.forEach(product => {
      if (tukhoa == product.name) {
        name = product.name
      }
    })
    return name
  }

  let tong = 0
  products.forEach(product => {
    if (product.isAvailable == true)
      tong += product.price
  })

  function filterByCategory(category) {
    return products.filter((product) => {
      return product.category == category
    })
  }
  const electronicsProducts = filterByCategory("Electronics")
  // const menu = ["Home", "Product", "Cart"]
  let productDatiem = tiemkiemtukhoa("Laptop")
  return (
    <div>
      {/* sm md lg xl 2xl */}``
      <ul className="flex">
        {
          products.map((product, index) => {
            return (
              <li key={index} className="border-2 shadow-lg hover:bg-slate-300 p-4 m-4 rounded-lg">
                <div className="text-red-500 text-2xl">
                  {product.name}
                </div>
                <div>
                  {product.price}
                </div>
              </li>
            )
          })
        }
      </ul>

      {/* <button className='bg-green-500 text-white'>
        Click
      </button> */}
    </div>
  )
}

export default Home