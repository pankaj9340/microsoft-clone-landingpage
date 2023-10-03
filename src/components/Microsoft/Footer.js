import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#eceff4] flex flex-col mt-10 pt-10 '>
    <div className=" flex flex-col space-y-10 p-4 sm:grid grid-cols-3 sm:grid-rows-2  gap-5 sm:space-y-0 lg:grid-cols-6 lg:grid-rows-1">
        <div className='flex flex-col space-y-2'>
            <h2 className=' text-slate-600 font-bold'>What's new</h2>
            <ul className='text-[12px] space-y-4 text-slate-600'>
                <li className='cursor-pointer hover:underline'>Microsoft 365</li>
                <li className='cursor-pointer hover:underline'>Surface Pro X</li>
                <li className='cursor-pointer hover:underline'>Surface Pro 7</li>
                <li className='cursor-pointer hover:underline'>Surface Laptop 3</li>
                <li className='cursor-pointer hover:underline'>Windows 11 apps</li>
            </ul>
        </div>

        <div className='flex flex-col space-y-2' >
            <h2 className=' text-slate-600 font-bold'>Microsoft Store</h2>
            <ul className='text-[12px] space-y-4 text-slate-600'>
                <li className='cursor-pointer hover:underline'>Account profile</li>
                <li className='cursor-pointer hover:underline'>Download Center</li>
                <li className='cursor-pointer hover:underline'>Microsoft Store Support</li>
                <li className='cursor-pointer hover:underline'>Returns</li>
                <li className='cursor-pointer hover:underline'>Order tracking</li>
            </ul>
        </div>

        <div className='flex flex-col space-y-2'>
            <h2 className=' text-slate-600 font-bold'>Education</h2>
            <ul className='text-[12px] space-y-4 text-slate-600'>
                <li className='cursor-pointer hover:underline'>Microsoft in education</li>
                <li className='cursor-pointer hover:underline'>Device for education</li>
                <li className='cursor-pointer hover:underline'>Microsoft Teams for Education</li>
                <li className='cursor-pointer hover:underline'>Microsoft 365 Edcation</li>
                <li className='cursor-pointer hover:underline'>Office Education</li>
                <li className='cursor-pointer hover:underline'>Educator training and development</li>
                <li className='cursor-pointer hover:underline'>Deals for students and parents</li>
                <li className='cursor-pointer hover:underline'>Azure for students</li>
            </ul>
        </div>

        <div className='flex flex-col space-y-2'>
            <h2 className=' text-slate-600 font-bold'>Buisness</h2>
            <ul className='text-[12px] space-y-4 text-slate-600'>
                <li className='cursor-pointer hover:underline'>Microsoft in education</li>
                <li className='cursor-pointer hover:underline'>Device for education</li>
                <li className='cursor-pointer hover:underline'>Microsoft Teams for Education</li>
                <li className='cursor-pointer hover:underline'>Microsoft 365 Edcation</li>
                <li className='cursor-pointer hover:underline'>Office Education</li>
                <li className='cursor-pointer hover:underline'>Educator training and development</li>
                <li className='cursor-pointer hover:underline'>Deals for students and parents</li>
                <li className='cursor-pointer hover:underline'>Azure for students</li>
            </ul>
        </div>

        <div className='flex flex-col space-y-2'>
            <h2 className=' text-slate-600 font-bold'>Developer and IT</h2>
            <ul className='text-[12px] space-y-4 text-slate-600'>
                <li className='cursor-pointer hover:underline'>Developer Center</li>
                <li className='cursor-pointer hover:underline'>Documentation</li>
                <li className='cursor-pointer hover:underline'>Microsoft Learn</li>
                <li className='cursor-pointer hover:underline'>Microsoft Tech Community</li>
                <li className='cursor-pointer hover:underline'>Azure Marketplace</li>
                <li className='cursor-pointer hover:underline'>AppSource</li>
                <li className='cursor-pointer hover:underline'>Microsoft Power Platform</li>
                <li className='cursor-pointer hover:underline'>Visual Studio</li>
            </ul>
        </div>

        <div className='flex flex-col space-y-2'>
            <h2 className=' text-slate-600 font-bold'>Company</h2>
            <ul className='text-[12px] space-y-4 text-slate-600'>
                <li className='cursor-pointer hover:underline'>Careers</li>
                <li className='cursor-pointer hover:underline'>About Microsoft</li>
                <li className='cursor-pointer hover:underline'>Comapany news</li>
                <li className='cursor-pointer hover:underline'>Privacy at Microsoft</li>
                <li className='cursor-pointer hover:underline'>Investors</li>
                <li className='cursor-pointer hover:underline'>Microsoft Advertising</li>
                <li className='cursor-pointer hover:underline'>Security</li>
            </ul>
        </div>
       </div>

        <div className='flex flex-col items-start text-slate-600 space-y-4 p-4 sm:flex-row justify-between sm:items-center'>
            <div>
                <p className='text-sm'>English (India)</p>
            </div>
            <div className='text-[10px]'>
                <ul className='flex  flex-wrap'>
                    <li className='cursor-pointer hover:underline'>Contact Microsoft</li>
                    <li className='mx-2 cursor-pointer hover:underline'>Privacy</li>
                    <li className='mx-2 cursor-pointer hover:underline'>Terms of use</li>
                    <li className='mx-2 cursor-pointer hover:underline'>Trademarks</li>
                    <li className='mx-2 cursor-pointer hover:underline'>About our ads</li>
                    <li className='cursor-pointer hover:underline' >@ Microsoft 2022</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer