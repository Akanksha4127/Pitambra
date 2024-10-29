import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logo, Navigation } from '../Constant/header';
import {Map, Phone, Instagram, Facebook, Twitter, Youtube, MapPin} from "lucide-react"

function Footer() {
  return (
    <div className="footer ">
      <div className="lg:flex justify-around items-center h-fit p-8 w-full bg-[#FF9E01]">
        <div className="logo flex flex-col  justify-center gap-6 ">
          <h1 className="text-lg">श्री पीतांबरा सूर्य नारायण मन्दिर</h1>
          <img src={logo} alt="" className="h-32 w-40  lg:h-32" />
        </div>
        <div className="links flex flex-col  gap-6  ">
          <h1 className="text-lg ">सभी पेज</h1>
          <div className="Navigation_Container  flex flex-col">
            {Navigation.map((field) => {
              return (
                <div className="hover:scale-105 transition duration-200 ease-in-out font-bold">
                  <Link to={field.path}>{field.heading}</Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="Address flex flex-col  gap-6">
          <h1 className="text-lg mt-4">मंदिर का स्थान</h1>
          <div className="address flex gap-1">
            <MapPin />
            <p>
              पता: यू ब्लॉक, सेक्टर 109, द्वारका एक्सप्रेसवे, गुरुग्राम हरियाणा,
              पिन कोड- 122001
            </p>
          </div>
          <div className="address flex gap-1">
            <Phone />
            <p>Tel:+91 9810258654, 9868079570, 9311372570</p>
          </div>

          <div className="SocialLinks  ">
            <ul className="flex  gap-2  ">
              <li className="h-8 w-8 rounded-full text-black bg-orange-600 hover:scale-105 transition duration-200 ease-in-out">
                <Link to="#" className="">
                  <Facebook
                    size={18}
                    color="white"
                    className=" ml-1.5 mt-1.5"
                  />
                </Link>
              </li>
              <li className="h-8 w-8 rounded-full text-black bg-orange-600 hover:scale-105 transition duration-200 ease-in-out">
                <Link to="#">
                  <Instagram size={17} color="white" className=" ml-2 mt-1.5" />
                </Link>
              </li>
              <li className="h-8 w-8 rounded-full text-black bg-orange-600 hover:scale-105 transition duration-200 ease-in-out">
                <Link to="#" className="">
                  <Twitter size={18} color="white" className=" ml-2 mt-1.5" />
                </Link>
              </li>
              <li className="h-8 w-8 rounded-full text-black bg-orange-600 hover:scale-105 transition duration-200 ease-in-out">
                <Link to="#" className="">
                  <Youtube size={18} color="white" className=" ml-2 mt-1.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright h-6 text-center">
        <h3 className=''>© Copyright @ 2024. All Rights Reserved</h3>
      </div>
    </div>
  );
}

export default Footer
