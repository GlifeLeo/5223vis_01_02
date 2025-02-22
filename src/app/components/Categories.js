import React from 'react'

function Categories() {

  const categories = [
    { name: "Category 1", id: 1 },
    { name: "Category 2", id: 2 },
    { name: "Category 3", id: 3 },
    { name: "Category 4", id: 4 },
    { name: "Category 5", id: 5 },
    { name: "Category 6", id: 6 },
    { name: "Category 7", id: 7 },
    { name: "Category 7", id: 7 },
    { name: "Category 7", id: 7 },
    { name: "Category 7", id: 7 },
    { name: "Category 7", id: 7 },
    { name: "Category 7", id: 7 },
    { name: "Category 7", id: 7 },
    { name: "Category 7", id: 7 },
    { name: "Category 7", id: 7 },
    { name: "Category 7", id: 7 },
  ]

  return (
    <div className="overflow-x-auto no_scrollbar">
      <ul className='flex justify-between pt-12 text-white'>
        {categories.map((cat, index) => {
          return <li className="min-w-40" key={index}>{cat.name}</li>
        })}
      </ul>
    </div>
  )
}

export default Categories