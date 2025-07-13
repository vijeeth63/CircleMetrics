"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [radius, setradius] = useState(0);
  const [area, setarea] = useState(0);

const findradius =(e) => {
  setradius(e.target.value)
  
}

  const findarea = () => {
    setarea(3.14*radius*radius)
    console.log(area)
    
  }
  
  return (
    <div className="bg-pink-100 h-[800px] py-[78px]">
    <div className=" bg-pink-200  text-black h-[500px] w-1/2 mx-auto">
      <h1 className=" bg-pink-300  text-4xl px-4 py-3 "><b>Circle</b></h1>
      <div className="px-4 ">solve for area</div>
      <div className="my-20 mx-4 text-4xl">A={area}</div>

      <div className="flex">
        <label className="mx-4 " htmlFor="radius">radius  
        </label>
        <input className="mx-4 bg-black bg-opacity-5" type="Number" onChange={findradius} />
        <button className="py-3 px-6 bg-pink-300 rounded-2xl" onClick={findarea}>Find</button>
      </div>

      <div className="my-20 mx-4">Solution
        <div>A=3.14*r^2=3.14*{radius}^2 = {area}</div>
      </div>
      


    </div>
    
    </div>
  );
}
