import React from "react";

const Logo2 = () => {
  return (
    <div className="grid grid-row-4 p-4 gap-y-7 sm:grid-cols-2 md:grid-cols-4 gap-x-4 md:p-0">
      <div className="flex flex-col ">
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWKmlf?ver=e649&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt=""
        />

        <p className="mt-3 bg-yellow-500 py-1 px-4  mx-3 font-medium text-black w-14 md:mx-0">
          New
        </p>

        <h2 className="text-xl px-3 font-[6px] text-black md:text-normal md:px-0 ">
        Surface Pro 8 for Business
        </h2>
        <p className="text-justify px-3 text-black md:p-0 text-[12px] md:text-justify md:text-[14px] ">
        Get unprecedented levels of performance and versatility on a 13-inch screen. Discover the newest Surface for Business devices now available. Available with Windows 11.
        </p>
        <a
          href="#"
          className="px-3 py-1 text-sm text-blue-600 font-normal hover:underline md:px-0"
        >
         Learn more
        </a>
      </div>

      <div className="flex flex-col ">
        <img
         src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWMGbF?ver=ecec&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt=""
        />

        <p className="invisible bg-yellow-500 py-1 px-4  mx-3 font-medium text-black w-14 ">
          New
        </p>

        <h2 className="text-xl px-3 font-[6px] text-black md:text-normal md:px-0">
          Windows 11 for business is here
        </h2>
        <p className=" text-justify px-3 text-black md:p-0 text-[12px] md:text-[14px] ">
        Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.
        </p>
        <a
          href="#"
          className="px-3 py-1 text-sm text-blue-600 font-normal hover:underline md:px-0"
        >
         Learn more
        </a>
      </div>

      <div className="flex flex-col">
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWLJ3u?ver=7dcf&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&x=755&y=404&aim=true"
          alt=""
        />

        <p className="invisible bg-yellow-500 py-1 px-4  mx-3 font-medium text-black w-14 ">
          New
        </p>

        <h2 className="text-xl px-3 font-[6px] text-black md:text-normal md:px-0">
        Get Microsoft Teams for free
        </h2>
        <p className="text-justify px-3 text-black md:p-0 text-[12px] md:text-justify md:text-[14px] ">
        Online meetings, chat and shared cloud storage – all in one place.
        </p>
        <a
          href="#"
          className="px-3 py-1 text-sm text-blue-600 font-normal hover:underline md:px-0"
        >
          Sign up for free
        </a>
      </div>

      <div className="flex flex-col">
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWURKU?ver=f584&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt=""
        />

        <p className=" invisible py-1 px-4  mx-3 font-medium text-black w-14 ">
          New
        </p>

        <h2 className="text-xl px-3 font-[6px] text-black md:text-normal md:px-0">
          Thrive in a hybrid world
        </h2>
        <p className="text-justify px-3 text-black md:p-0 text-[12px] md:text-justify md:text-[14px] ">
        Discover tools, resources and strategies to help your employees succeed in the new world of flexible work.
        </p>
        <a
          href="#"
          className="px-3 py-1 text-sm text-blue-600 font-normal hover:underline md:px-0"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Logo2;
