import React from 'react'

function BestSellerProduct() {
  return (
    <div className='relative bg-gray-100'>
      <div className="bg-red-300 text-white absolute left-0 top-4 px-4">Hot</div>
      <img src='https://picsum.photos/200/300' className='w-full h-60 object-cover' />
      <h3 className='p-3'>Basic Dress Green</h3>
      <div className="flex justify-between p-3">
        <h5 className='text-gray-400'>Dress</h5>
        <h4 className='line-through'>$236.00</h4>
        <h4>$236.00</h4>
      </div>
    </div>
  )
}
function BestSeller() {
  const products = [
    {
      imageUrl: "https://picsum.photos/200/300",
      name: "Basic Dress Green",
      salePrice: "",
      price: "$236.00",
      status: "HOT",
      category: "Dress"
    },
    {
      imageUrl: "https://picsum.photos/200/300",
      name: "Nike Sportswear Futura Luxe",
      salePrice: "",
      price: "$130.00",
      status: "",
      category: "Bag"
    },
    {
      imageUrl: "https://picsum.photos/200/300",
      name: "Yellow Reserved Hoodie",
      salePrice: "$364.00",
      price: "$155.00",
      status: "SALE",
      category: "Dress"
    },
    {
      imageUrl: "https://picsum.photos/200/300",
      name: "Nike Air Zoom Pegasus",
      salePrice: "$200.00",
      price: "$198.00",
      status: "SALE",
      category: "Shoe"
    }
  ]

  return (
    <div>
      <div className="text-center my-10">Best Seller</div>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product, index) => {
          return (
            <div key={index} className='relative bg-gray-100'>

              {
                product.status ?
                  <div className={
                    `text-white absolute left-0 top-4 px-4 text-sm ${product.status == "HOT" ? "bg-red-300" : "bg-black"}`
                  } >
                    {product.status}
                  </div>
                  : ""
              }
              <img src={product.imageUrl} className='w-full h-60 object-cover' />
              <h3 className='p-3'>{product.name}</h3>
              <div className="flex justify-between p-3">
                <h5 className='text-gray-400'>{product.category}</h5>
                {product.salePrice ? <h4 className='line-through'>{product.salePrice}</h4> : ""}
                <h4>{product.price}</h4>
              </div>
            </div>
          )
        })}
        {/* <BestSellerProduct></BestSellerProduct> */}
      </div>
    </div>
  )
}

export default BestSeller