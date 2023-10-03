import React from 'react'

const Logo = () => {
  return (
    <div className='p-11 flex flex-col text-sm space-y-4 md:flex-row md:justify-between md:items-center md:max-w-4xl md:mx-auto md:space-x-4 text-center'>
        <div className='flex justify-start items-center space-x-3 font-bold md:flex-col md:justify-center hover:underline cursor-pointer '>
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4sQDc?ver=30c2&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="" className='w-6 md:w-auto'/>
            <p>Choose your Microsoft 365</p>
        </div>
        <div className='flex justify-start items-center space-x-3 font-bold md:flex-col md:justify-center hover:underline cursor-pointer'>
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pndL?ver=5217&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="" className='w-6 md:w-auto' />
            <p>Explore Surface devices</p>
        </div>
        <div className='flex justify-start items-center space-x-3 font-bold md:flex-col md:justify-center hover:underline cursor-pointer'>
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWWl29?ver=addd&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="" className='w-6 md:w-auto'/>
            <p>Buy Xbox games</p>
        </div>
        <div className='flex justify-start items-center space-x-3 font-bold md:flex-col md:justify-center hover:underline cursor-pointer'>
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4sQDc?ver=30c2&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="" className='w-6 md:w-auto'/>
            <p>Get Windows 11</p>
        </div>
    </div>
  )
}

export default Logo