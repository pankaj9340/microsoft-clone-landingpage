import React from 'react'

const Products = () => {
  return (
    <div className='grid grid-row-4 p-4 gap-y-7 sm:grid-cols-2 md:grid-cols-4 gap-x-4 md:p-0'>
        <div className='flex flex-col '>
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWAshJ?ver=1e8d&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="" />

            <p className=" bg-yellow-500 py-1 px-4  mx-3 font-medium text-black w-14 ">New</p>

          <h2 className="text-xl px-3 font-[6px] text-black md:text-normal md:px-0 ">Surface Pro 8</h2>
          <p className="text-justify px-3 text-black md:p-0 text-[12px] md:text-justify md:text-[14px] ">
          Do it all with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance.
          </p>
          <a href="#" className='px-3 py-1 text-sm text-blue-600 font-normal hover:underline md:px-0'>Shop now</a>
        </div>

        <div className='flex flex-col'>
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rzE2?ver=aa0b&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="" />
            
            <p className="invisible bg-yellow-500 py-1 px-4  mx-3 font-medium text-black w-14 ">New</p>

        <h2 className="text-xl px-3 font-[6px] text-black md:text-normal md:px-0">Surface Pro 8</h2>
        <p className=" text-justify px-3 text-black md:p-0 text-[12px] md:text-[14px] ">
        World-class performance with more privacy, more productivity and more value while you browse.
        </p>
        <a href="#" className='px-3 py-1 text-sm text-blue-600 font-normal hover:underline md:px-0'>Download now</a>
        </div>

        
        <div className='flex flex-col'>
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWKFjD?ver=8abe&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="" />

            <p className="bg-yellow-500 py-1 px-4  mx-3 font-medium text-black w-14 text-center">New</p>
            
        <h2 className="text-xl px-3 font-[6px] text-black md:text-normal md:px-0">Surface Laptop Studio</h2>
        <p className="text-justify px-3 text-black md:p-0 text-[12px] md:text-justify md:text-[14px] ">
        World-class performance with more privacy, more productivity and more value while you browse.
        </p>
        <a href="#" className='px-3 py-1 text-sm text-blue-600 font-normal hover:underline md:px-0'>Learn more</a>
        </div>

        
        <div className='flex flex-col'>
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4Rwnk?ver=0641&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&x=1489&y=247&aim=true" alt="" />
            
            <p className=" md:invisible py-1 px-4  mx-3 font-medium text-black w-14 ">New</p>

        <h2 className="text-xl px-3 font-[6px] text-black md:text-normal md:px-0">PC Game Pass</h2>
        <p className="text-justify px-3 text-black md:p-0 text-[12px] md:text-justify md:text-[14px] ">
        World-class performance with more privacy, more productivity and more value while you browse.
        </p>
        <a href="#" className='px-3 py-1 text-sm text-blue-600 font-normal hover:underline md:px-0'>Join now</a>
        </div>

        
    </div>
  )
}

export default Products