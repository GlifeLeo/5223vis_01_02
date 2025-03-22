import React from "react";
import Link from "next/link"
import { products } from "@/backend/index"


function Product(props) {
  return (
    <Link href={`/san-pham/${props.id}`} className="block p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="rounded-xl flex justify-center bg-slate-50 relative max-h-56 overflow-hidden">
        <img
          className="min-w-full h-full object-cover transition-transform duration-300"
          src={props.imageUrl}
          alt={props.name}
        />
        {props.discount !== 0 && (
          <div className=" m-4 absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
            -{props.discount}%
          </div>
        )}
      </div>

      <h3 className="font-bold text-lg my-4 text-gray-800">
        {props.name}
      </h3>

      <div className="flex items-center gap-1 text-yellow-400">
        ⭐ {props.rate}/5
      </div>

      <div className="flex items-center gap-x-3 mt-2">
        <div className="text-lg font-semibold text-gray-900">${props.price}</div>
        {props.discount !== 0 && (
          <div className="text-sm text-gray-400 line-through">
            ${props.price + props.price * (props.discount / 100)}
          </div>
        )}
      </div>
    </Link>
  );
}

function ProductPage() {
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