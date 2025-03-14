import React from "react";
import Link from "next/link"
function Product(props) {
  return (
    <Link href={"/san-pham/" + props.id}>
      <div className=" rounded-xl flex justify-center py-10 bg-slate-50">
        <img
          className="w-32 h-32 max-h-40 object-cover"
          src={props.imageUrl}
        />
      </div>
      <h3 className="font-bold text-2xl my-6">
        {props.name}
      </h3>
      <div>
        {props.rate}/5
      </div>
      <div className="flex items-center gap-x-3">
        <div>
          ${props.price}
        </div>
        {
          props.discount != 0 ?
            <div className="line-through text-gray-300">
              ${props.price + props.price * (props.discount / 100)}
            </div>
            :
            ""
        }
        {
          props.discount != 0 ?
            <div className="bg-red-100 rounded-full py-1 px-2 text-red-500 inline">
              -{props.discount}%
            </div>
            :
            ""
        }
      </div>
    </Link>
  )
}

function ProductPage() {
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

  return <div className="w-4/5 mx-auto ">
    <div className="text-4xl py-10">Products</div>
    <div className="grid grid-cols-3 gap-10 py-10">
      {products.map((pro, i) => {
        return <div key={i} >
          <Product
            name={pro.name}
            imageUrl={pro.imageUrl}
            price={pro.price}
            rate={pro.rate}
            id={pro.id}
            discount={pro.discount}
          />
        </div>
      })}
    </div>
  </div>
}

export default ProductPage;