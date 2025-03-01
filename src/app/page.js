import React from 'react'
import TopBar from "@/app/components/TopBar"
import Categories from "@/app/components/Categories"
import BestSeller from "@/app/components/BestSeller"

function Home() {
  return (
    <div>
      <div className='bg-gray-600 py-12'>
        <div className='w-4/5 mx-auto'>
          <TopBar></TopBar>
          <Categories></Categories>
        </div>
      </div>
      <div className='w-4/5 mx-auto'>
        <BestSeller></BestSeller>
      </div>
    </div>
  )
}

export default Home