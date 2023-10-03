import React from "react";

const Section = () => {
  return (
    <div className=" flex flex-col-reverse bg-[#eceff4] md:flex-row justify-between  ">
      <div className=" mx-auto flex flex-col items-center justify-center  my-5 space-y-1 md:justify-start md:items-start p-4 max-w-xl md:space-y-4">

        <p className="bg-yellow-500 py-1 px-4 font-medium text-black">New</p>
        <h2 className="text-xl font-medium text-black md:text-3xl">Surface Pro 8</h2>
        <p className="text-center p-3 text-black md:p-0 text-sm md:text-justify text-[1.01rem] ">
          Do more with a larger 13-inch touchscreen,faster connections and extra
          speen. Now available with windows 11.
        </p>
        <a
          href="#"
          className="bg-black text-white py-2 px-6 font-bold hover:underline"
        >
          Learn more
        </a>
      </div>

      <div className="mb-10">
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWKHu9?ver=19af&q=0&m=8&h=431&w=767&b=%23FFFFFFFF&l=f&x=978&y=253&s=2022&d=1136&aim=true"
          alt=""
        
        />
      </div>
    </div>
  );
};

export default Section;
