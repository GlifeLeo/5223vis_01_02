import React from 'react'
// import TopBar from "@/app/components/Home/TopBar"
function TopBar() {
  return (
    <div className=''>
      <div>
        Search
      </div>
      <div>
        Logo
      </div>
      <div>
        Account
      </div>
      <div>
        Shopping
      </div>
    </div>
  )
}

function Home() {
  return (
    <div>
      {/* <TopBar /> */}
      <TopBar></TopBar>
    </div>
  )
}

export default Home