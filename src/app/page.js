import React from 'react'
import BestSeller from "@/app/components/BestSeller"

function Home() {
  return (
    <div>
      <div className='w-4/5 mx-auto'>
        <FashionGrid></FashionGrid>
        <BestSeller></BestSeller>
        <InstagramSection></InstagramSection>

      </div>
    </div>
  )
}

export default Home


function FashionGrid() {
  return (
    <div className="w-full mx-auto py-10">
      <div className="flex justify-center space-x-6 mb-6 mb-10">
        <img src="https://picsum.photos/200/300" alt="Logo" className='w-32 h-32 rounded-md' />
        <img src="https://picsum.photos/200/300" alt="Logo" className='w-32 h-32 rounded-md' />
        <img src="https://picsum.photos/200/300" alt="Logo" className='w-32 h-32 rounded-md' />
        <img src="https://picsum.photos/200/300" alt="Logo" className='w-32 h-32 rounded-md' />
        <img src="https://picsum.photos/200/300" alt="Logo" className='w-32 h-32 rounded-md' />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <img src="https://picsum.photos/200/300" alt="Fashion" className="w-full max-h-80 object-cover" />
        </div>
        <div className="col-span-1 grid grid-cols-2 gap-4">
          <img src="https://picsum.photos/200/300" alt="Fashion" className="max-h-[152px] w-full object-cover" />
          <img src="https://picsum.photos/200/300" alt="Fashion" className="max-h-[152px] w-full object-cover" />
          <img src="https://picsum.photos/200/300" alt="Fashion" className="max-h-[152px] w-full object-cover" />
        </div>
      </div>
      <div className="mt-6 text-center text-lg font-semibold">EXPLORE NEW AND POPULAR STYLES</div>
    </div>
  );
}


function InstagramSection() {
  return (
    <div className="w-full py-10 text-center my-10">
      <h2 className="text-2xl font-bold mb-6">Follow Products And Discounts On Instagram</h2>
      <div className="flex justify-center gap-4 mb-6">
        {[...Array(6)].map((_, index) => (
          <div key={index}>
            <img
              src="https://picsum.photos/200/300"
              alt={`Instagram Image ${index + 1}`}
              layout="fill"
              className="w-32 h-32 rounded-md object-cover"
            />
          </div>
        ))}
      </div>
      <h3 className="text-xl font-semibold mb-4">Or Subscribe To The Newsletter</h3>
      <div className="flex justify-center">
        <input
          type="email"
          placeholder="Email Address..."
          className="border-b border-black px-4 py-2 outline-none w-64 bg-transparent"
        />
        <button className="ml-2 text-gray-600 font-semibold">SUBMIT</button>
      </div>
    </div>
  );
}

