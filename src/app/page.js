import React from 'react'
import TopBar from "@/app/components/TopBar"
import Categories from "@/app/components/Categories"

function Home() {
  return (
    <div className='bg-gray-600 py-12'>
      <div className='w-4/5 mx-auto'>
        {/* <TopBar /> */}
        <TopBar></TopBar>
        <Categories></Categories>
      </div>
    </div>
  )
}

export default Home