import Link from 'next/link'
import React from 'react'

function TopBar() {
  return (
    <div className='flex justify-between text-white pb-7 border-b-2 border-white'>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {/* <input placeholder='search' className='bg-transparent' /> */}
      </div>
      <div className='text-center w-full'>
        Logo
      </div>
      <div className="flex gap-x-8">
        <Link href='/san-pham'>Products</Link>
        <Link href='/lien-he' className='whitespace-nowrap'>Contact Us</Link>
        <span className='flex items-center gap-x-2'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
          </svg>
          Account
        </span>
        <span className='flex items-center gap-x-2'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          Shopping
        </span>
      </div>
    </div>
  )
}

export default TopBar