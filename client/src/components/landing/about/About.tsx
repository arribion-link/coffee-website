// import React from 'react'
import { IoChatbubblesOutline } from "react-icons/io5";
import { HiArrowLongRight } from "react-icons/hi2";
import { LuNetwork } from "react-icons/lu";
import { GrCertificate } from "react-icons/gr";
import { GoStack } from "react-icons/go";
import about_img from "../../../assets/about.png"
const About = () => {
    
  return (
    <section className="min-h-screen my-[12em] mx-4 ">
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div>
          <img src={about_img} alt="" className="w-full h-auto max-w-[30em]  " />
        </div>
        <div>
          <h1 className="text-[clamp(1.5em,7vw,3em)] font-bold text-amber-800">
            We care about the quality of our products
          </h1>
          <p>
            Drinking coffee is one of the most global things you can do each
            day. Here i can spend a long and comfortable time with this
            workspace tacilities
          </p>
          <div className="grid md:grid-cols-2 mt-6">
            <div className="my-4 flex gap-4 items-center">
              <div className="p-4 rounded-4xl bg-pink-200 text-amber-700">
                <IoChatbubblesOutline size={30} />
              </div>
              <div>
                <h2 className="text-2xl text-amber-950">Active community</h2>
                <p>You can reach out whenever you want!</p>
              </div>
            </div>
            <div className="my-4 flex gap-4 items-center">
              <div className="p-4 rounded-4xl bg-pink-200 text-amber-700">
                <LuNetwork size={30} />
              </div>
              <div>
                <h2 className="text-2xl text-amber-950">Best product Design</h2>
                <p>We worked a lot to make a great experience</p>
              </div>
            </div>
            <div className="my-4 flex gap-4 items-center">
              <div className="p-4 rounded-4xl bg-pink-200 text-amber-700">
                <GrCertificate size={30} />
              </div>
              <div>
                <h2 className="text-2xl text-amber-950">Premium quality</h2>
                <p>A premium quality coffee is what out customers desrve</p>
              </div>
            </div>
            <div className="my-4 flex gap-4 items-center">
              <div className="p-4 rounded-4xl bg-pink-200 text-amber-700">
                <GoStack size={30} />
              </div>
              <div>
                <h2 className="text-2xl text-amber-950">The best material</h2>
                <p>Our product is made by premium material.</p>
              </div>
            </div>
          </div>
          <button className="text-white bg-amber-950 my-7 py-1 px-4 rounded-4xl flex gap-6 items-center">
            Explore our Product
            <HiArrowLongRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default About
