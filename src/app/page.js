import React from 'react'
import TopBar from "@/app/components/TopBar"
import Categories from "@/app/components/Categories"
import BestSeller from "@/app/components/BestSeller"

function Home() {
  return (
    <div>
      <div className='w-4/5 mx-auto'>
        <BestSeller></BestSeller>
      </div>
    </div>
  )
}

export default Home