import React from 'react'

function ImageComponent() {
  return <img src="https://picsum.photos/200/300" width={200} alt="" />
}
function SignupForm() {
  return <form>
    <input className='border' placeholder='username' />
    <input className='border text-black' placeholder='password' type="password" />
    <button>Sign up</button>
  </form>
}
function BaiTap() {
  return (
    <div className='flex flex-col gap-4'>
      <ImageComponent />
      <SignupForm />
    </div>
  )
}



export default BaiTap