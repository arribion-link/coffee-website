// import React from 'react'

import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa"
import img from "../assets/hero.png"
const Contact = () => {
  return (
    <>
      <section className="min-h-[80vh] mx-8 ">
        <div className="grid md:grid-cols-2">
          <div>
            <img src={img} alt="" className="max-w-[20em] " />
          </div>
          <div>
            <h1 className=" text-amber-900">Talk To Us</h1>
            <p></p>
            <div>
              <div className="flex items-center gap-6">
                <FaWhatsapp />
                <h1>+ 245 7 99 77 46 53</h1>
              </div>
              <div className="flex items-center gap-6">
                <FaEnvelope />
                <h1>arribion@gmail.com</h1>
              </div>
            </div>
            <div className="mt-6">
              <h1 className=" text-amber-900">Follow us On</h1>
              <div className="flex gap-4">
                <div className="border p-3 rounded hover:text-blue-600 border-amber-900">
                  <FaFacebook />
                </div>
                <div className="border p-3 rounded hover:text-blue-600 border-amber-900">
                  <FaGithub />
                </div>
                <div className="border p-3 rounded hover:text-blue-600 border-amber-900">
                  <FaTwitter />
                </div>
                <div className="border p-3 rounded hover:text-blue-600 border-amber-900">
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h1 className=" text-amber-900">About</h1>
              <p>
                Hi i'm jeff Mutethia a fullstack software developer and designer
                based in kenya. i develop websites that actually converts
                visitors to buyer from business that mean actual business
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact
