import React,{useState} from 'react'

const Navbar = () => {
    const [value,setVal]=useState(true)
  return (
    <div className='px-2 py-1 flex justify-between  items-center relative'>
        <div className='flex items-center  space-x-5' >

            <div className='w-5 space-y-1 md:hidden' >
               {
               value?<img src="images/menu.png" alt="" onClick={()=>setVal(!value)} className='cursor-pointer'/> 
               :
               <img src="images/close.png" alt="" onClick={()=>setVal(!value)} className='cursor-pointer'/>
               }
            </div>
            
            <div className={`absolute right-0 top-14  bg-[#f2f2f2] w-full transition-all  ease-in-out duration-500 z-auto ${value? 'top-[-42rem]': 'top-14'} md:hidden`}>
                <ul className='p-2 w-full'>
                    <li className='p-3 m-1 border border-b-1 font-light text-md tracking-wider cursor-pointer hover:underline'>Microsoft 365</li>
                    <li className='p-3 m-1 border border-b-1 font-light text-md tracking-wider cursor-pointer hover:underline'>Office</li>
                    <li className='p-3 m-1 border border-b-1 font-light text-md tracking-wider cursor-pointer hover:underline'>Windows</li>
                    <li className='p-3 m-1 border border-b-1 font-light text-md tracking-wider cursor-pointer hover:underline'>Surface</li>
                    <li className='p-3 m-1 border border-b-1 font-light text-md tracking-wider cursor-pointer hover:underline'>Xbox</li>
                    <li className='p-3 m-1 border border-b-1 font-light text-md tracking-wider cursor-pointer hover:underline'>Support</li>
                    <li className='p-3 m-1 border border-b-1 font-light text-md tracking-wider cursor-pointer hover:underline'>PCs & Devices </li>
                    <li className='p-3 m-1 border border-b-1 font-light text-md tracking-wider cursor-pointer hover:underline'>Entertainment</li>
                    <li className='p-3 m-1 border border-b-1 font-light text-md tracking-wider cursor-pointer hover:underline'>Business</li>
                    <li className='p-3 m-1 border border-b-1 font-light text-md tracking-wider cursor-pointer hover:underline'>Developer & IT</li>
                    <li className='p-3 m-1 border border-b-1 font-light text-md tracking-wider cursor-pointer hover:underline'>Other</li>
                    <li className='p-3 m-1 border border-b-1 font-light text-md tracking-wider cursor-pointer hover:underline'>View SiteMap</li>
                </ul>
            </div>

            <div className='hidden md:block pr-10'>
                <ul className='md:flex space-x-2 font-normal text-sm lg:space-x-10'>
                    <li className='cursor-pointer hover:underline'>Microsoft 365</li>
                    <li className='cursor-pointer hover:underline'>Office</li>
                    <li className='cursor-pointer hover:underline'>Windows</li>
                    <li className='cursor-pointer hover:underline'>Surface</li>
                    <li className='cursor-pointer hover:underline'>Xbox</li>
                    <li className='cursor-pointer hover:underline'>Support</li>
                </ul>
                
            </div>

            <div className='w-5 md:hidden'>
                <img src="https://www.iconpacks.net/icons/2/free-search-icon-3076-thumb.png" alt="" />
            </div>
        </div>

        <div className='w-[7rem] md:-order-1 md:w-28 '><img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="" />
        
        </div>
    
        <div className='flex space-x-4 justify-center items-center'>
        <div className='hidden md:block w-6'><img src="https://www.iconpacks.net/icons/2/free-search-icon-3076-thumb.png" alt="" /></div>
            <div className='w-12'>
                <img src="https://thumbs.dreamstime.com/b/basket-cart-illustration-vector-icon-shop-buy-retail-sale-market-sign-symbol-commerce-store-business-design-web-e-commerce-159191799.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar