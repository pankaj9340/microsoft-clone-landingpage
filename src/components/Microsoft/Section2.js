import React from 'react'

const Section2 = () => {
  return (
    <div className='py-10  flex flex-col  space-y-5 my-10 sm:relative '>
        <div className=''>
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3hFDE?ver=e113&q=0&m=8&h=431&w=767&b=%23FFFFFFFF&l=f&x=494&y=172&s=1626&d=914&aim=true" alt=""
            className='md:w-full' />
        </div>

        <div className='flex flex-col items-center justify-center p-3 space-y-3 sm:z-10 sm:absolute  sm:p-0 sm:items-baseline sm:ml-5 sm:top-20 md:ml-10 lg:top-60'>
            <h1 className='font-bold text-xl'>Microsoft OneDrive</h1>
            <p className='max-w-sm text-center text-sm sm:text-left'>Save your files and photos to OneDrive and access them from any device, anywhere</p>
            <a href="#" className='bg-black text-white py-2 px-6 hover:underline'>Learn more</a>
        </div>
    </div>
  )
}

export default Section2