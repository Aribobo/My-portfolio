import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] max-auto p-2 grid md:grid-cols-5 gap-6 pt-20 px-4">
        <div className="col-span-4 text-xl">
          <h2 className=" text-gray-800 ">Project</h2>
          <br />
          <p className="text-[#fd7e14] text-2xl">Overview</p>

          <br />
          
          <p>
         Lucid Board is a responsive and functional admin panel developed with Next js, Tailwind Css and Chart Js
           
            </p>
           
          <br />
          <a href="https://lucid-dashboard.vercel.app">
            <button className="px-8 py-2 mt-4 mr-8 text-[#d7c69d] ">Demo</button></a>
          <a href="https://github.com/Aribobo/simple-dashboard"><button className="px-8 py-2 mt-4 mr-4 text-[#d7c69d]">Code</button></a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-700 rounded-xl p-4 text-md">
          <div className="p-2">
            <p className="text-center font-bold pb-2 mb-8 text-md text-gray-700 ">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-700 py-2 flex items-center mb-10">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-700 py-2 flex items-center mb-10">
                <RiRadioButtonFill className="pr-1" /> Next Js
              </p>
              <p className="text-gray-700 py-2 flex items-center mb-10">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-700 py-2 flex items-center mb-10">
                <RiRadioButtonFill className="pr-1" /> Chart Js
              </p>
             
            </div>
          </div>
        </div>
        <Link href="/#project">
          <p className="underline cursor-pointer text-2xl">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
