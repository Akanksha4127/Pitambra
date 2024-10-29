import React from 'react';
import { useState, modelRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, AlignLeft, X } from "lucide-react";
import {Navigation, logo} from "../Constant/header"
import ButtonWrapper from './Button';




function Header() {
  const [showHamburger, setShowHamburger] = useState(false);

  const [showSearchBar, setShowSearchBar] = useState(false);

// For Hamburger
  const Hamburger = ({ onClose }) => {
    const closeModel = (e) => {
      if (modelRef.current === e.target) {
        onClose();
      }
    };

    return (
      <div
        onClick={closeModel}
        className="fixed inset-0 flex  w-[70vw] z-50 backdrop-blur-3xl bg-black  bg-opacity-95 "
      >
        <div className="flex flex-col bg-black bg-opacity-30 w-full h-screen">
          <div className="h-24  flex justify-between p-6 gap-2 ">
            <div className="w-full h-16 ">
              <h1>Menu</h1>
            </div>
            <div>
              <button className="" onClick={onClose}>
                <X size={30} />
              </button>
            </div>
          </div>
          {/* link section */}
          <section className=" flex flex-col  m-4 ">
            <div className="Navigation_Container flex flex-col">
              {Navigation.map((field, index) => {
                return (
                  <div
                    key={index}
                    className="hover:scale-105 transition duration-200 ease-in-out    px-1 py-2 w-32 hover:bg-amber-950  rounded-lg"
                  >
                    <Link to={field.path}>{field.heading}</Link>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    );
  };
  return (
    <div className="Header font-serif text-white text-opacity-100  flex justify-center gap-40  items-center h-20 bg-[#FF9A14]  shadow-2xl ">
      {/* Hamburger for phone and tab view */}
      <div className="Hamburger">
        <button
          className="laptop:hidden mobile:block"
          onClick={() => setShowHamburger(true)}
        >
          <AlignLeft
            size={25}
            className="m-1 group-hover:text-black text-white lg:hidden font-light"
          />
        </button>

        {showHamburger && (
          <Hamburger
            onClose={() => {
              setShowHamburger(false);
            }}
          />
        )}
      </div>

      <div className="LogoContainer">
        <img src={logo} alt="" className="w-16 " />
      </div>

      
        <div className="Navigation_Container gap-8 hidden lg:flex">
          {Navigation.map((field) => {
            return (
              <div className="hover:scale-105 transition duration-200 ease-in-out text-white">
                <Link to={field.path}>{field.heading}</Link>
              </div>
            );
          })}
        </div>
        <div className="LogIn-E-Puja flex ">
          {/* <ButtonWrapper>Login</ButtonWrapper> */}
          <ButtonWrapper>E-Puja</ButtonWrapper>
        </div>
      </div>
    
  );
}

export default Header
