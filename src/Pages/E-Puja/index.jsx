import React from "react";
import ButtonWrapper from "../../Component/Button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, IndianRupee, Mail, MessageCircleMore, Phone } from "lucide-react";
import { Demo1, Demo2, Demo3 } from "../../utility/E-PujaImages";

function Index() {
  const ProductCard = ({ Photo, Name, About, Price, onClick }) => {
    return (
      <div className="flex flex-col gap-2 mx-3 my-6 text-[#432B1E] p-2 border drop-shadow-lg shadow-lg">
        <section className="">
          <img
            src={Photo}
            className="w-72 h-60 hover:scale-105 transition duration-200 ease-in-out mx-3"
          />
        </section>
        <h1 className="text-md tracking-tighter font-bold text-black">
          {Name}
        </h1>
        <h2 className="text-sm tracking-tighter font-semibold text-black">
          {About}
        </h2>
        {/* <div className="flex gap-2">
          <IndianRupee />
          <p>{Price}</p>
        </div> */}
        <div className="flex gap-2">
          <button
            onClick={onClick}
            className="bg-orange-400 rounded-sm flex justify-center items-center px-16 py-3 text-xs drop-shadow-2xl shadow-black w-fit text-white hover:scale-105 transition duration-200 ease-in-out"
          >
            Book Now
          </button>
          <Link
            onClick={onClick}
            className="bg-yellow-400 rounded-sm flex justify-center items-center px-16 py-3 text-xs drop-shadow-2xl shadow-black w-fit text-white hover:scale-105 transition duration-200 ease-in-out"
          >
            <MessageCircleMore />
          </Link>
        </div>
      </div>
    );
  };
  const ProductConstant = ()=> {
    return (
      <div className="cards flex flex-wrap    lg:flex justify-center items-center pb-10">
        <ProductCard
          Photo={Demo1}
          Name={"Koothanur Maha Saraswati Amman Temple"}
          About={"Puja For Knowledge/Education"}
          Price={"1151"}
          onClick={() => navigate("#")}
        />
        <ProductCard
          Photo={Demo2}
          Name={"Sringeri Sharadamba Devi Saraswati Templ..."}
          About={"Puja For Knowledge/Education"}
          Price={"1151"}
          onClick={() => navigate("#")}
        />
        <ProductCard
          Photo={Demo3}
          Name={"Sringeri Vidyashankara Shiva Temple Srin..."}
          About={"Puja For Knowledge/Education"}
          Price={"1151"}
          onClick={() => navigate("#")}
        />
        <ProductCard
          Photo={Demo1}
          Name={"Maa Bangla Mukhi Puja"}
          About={"Puja For Knowledge/Education"}
          Price={"1151"}
          onClick={() => navigate("#")}
        />
        <ProductCard
          Photo={Demo2}
          Name={"Rudra Abhishekh"}
          About={"Puja For Knowledge/Education"}
          Price={"1151"}
          onClick={() => navigate("#")}
        />
        <ProductCard
          Photo={Demo3}
          Name={"Ganesh Puja"}
          About={"Puja For Knowledge/Education"}
          Price={"1151"}
          onClick={() => navigate("#")}
        />
        <ProductCard
          Photo={Demo2}
          Name={"Mata rani Puja"}
          About={"Puja For Knowledge/Education"}
          Price={"1151"}
          onClick={() => navigate("#")}
        />
        <ProductCard
          Photo={Demo3}
          Name={"Sringeri Vidyashankara Shiva Temple Srin..."}
          About={"Puja For Knowledge/Education"}
          Price={"1151"}
          onClick={() => navigate("#")}
        />
        <ProductCard
          Photo={Demo2}
          Name={"Sringeri Sharadamba Devi Saraswati Templ..."}
          About={"Puja For Knowledge/Education"}
          Price={"1151"}
          onClick={() => navigate("#")}
        />
        <ProductCard
          Photo={Demo3}
          Name={"Sringeri Vidyashankara Shiva Temple Srin..."}
          About={"Puja For Knowledge/Education"}
          Price={"1151"}
          onClick={() => navigate("#")}
        />
        <ProductCard
          Photo={Demo2}
          Name={"Sringeri Sharadamba Devi Saraswati Templ..."}
          About={"Puja For Knowledge/Education"}
          Price={"1151"}
          onClick={() => navigate("#")}
        />
        <ProductCard
          Photo={Demo3}
          Name={"Sringeri Vidyashankara Shiva Temple Srin..."}
          About={"Puja For Knowledge/Education"}
          Price={"1151"}
          onClick={() => navigate("#")}
        />
      </div>
    );
  }
    
  return (
    <div className="E-puja ">
      <div className="LogIn-Resister flex justify-around items-center h-14 bg-orange-400 w-screen">
        <div className="email-phone  gap-14  lg:flex hidden">
          <div className="phone flex gap-2">
            <Phone />
            <Link to="#">Tel:+91 9810258654, 9868079570, 9311372570</Link>
          </div>
          <div className="email flex gap-2">
            <Mail />
            <Link to="#">@aka...@gmail.com</Link>
          </div>
        </div>
        <div className="Mycart flex justify-center items-center gap-8 text-lg">
          <Link
            to="/login"
            className="h-fit w-fit px-6 py-1 rounded-lg  hover:bg-orange-600 hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="h-fit w-fit px-6 py-1 rounded-lg  hover:bg-orange-600 hover:text-white"
          >
            Register
          </Link>
          <Link
            to="/my-cart"
            className="h-fit w-fit px-6 py-1 rounded-lg  hover:bg-orange-600 hover:text-white"
          >
            My Cart
          </Link>
        </div>
      </div>

      {/* Buttons- Gods- Goddesses, Remedy, Filter */}
      <div className="Title">
        <h1 className="font-semibold text-3xl text-center lg:text-start mt-10 lg:mx-16">
          Remedy Pujas/ Dosha Pujas
        </h1>
      </div>
      <div className="button lg:flex  justify-around items-center  mt-10 mx-10">
        <button className="px-4 py-2 shadow-lg lg:w-96 w-[80vw] bg-orange-400 rounded-md transform hover:scale-105 transition duration-300 ease-in-out mt-4">
          Gods & Goddesses
        </button>
        <div>
          <button className="px-4 py-2 mt-4 lg:w-96 w-[80vw] bg-yellow-400 rounded-md transform hover:scale-105  transition duration-300 ease-in-out">
            Remedy Pujas/Dosha Puja
          </button>
        </div>
        <button className="px-4 py-2 mt-4  lg:w-96 w-[80vw] bg-orange-400 rounded-md transform hover:scale-105 transition duration-300 ease-in-out">
          Filter
        </button>
      </div>
      {/* Remedy/ Puja and Dosha */}

      <section className="products py-6 mt-6 shadow-lg bg-yellow-50 ">
        <ProductConstant />
      </section>
    </div>
  );
}

export default Index;
