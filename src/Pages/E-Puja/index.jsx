import React from "react";
import ButtonWrapper from "../../Component/Button";
import { Link } from "react-router-dom";
import { ArrowRight, IndianRupee, Mail, Phone } from "lucide-react";
import { Demo1, Demo2, Demo3 } from "../../utility/E-PujaImages";

function Index() {
  const ProductCard = ({ Photo, Name, About, Price, onClick }) => {
    return (
      <div className="flex flex-col gap-2 m-3 text-[#432B1E] p-2 border drop-shadow-lg shadow-lg">
        <section>
          <img
            src={Photo}
            className="w-72 h-60 hover:scale-105 transition duration-200 ease-in-out"
          />
        </section>
        <h1 className="text-md tracking-tighter font-bold text-black">
          {Name}
        </h1>
        <h2 className="text-sm tracking-tighter font-semibold text-black">
          {About}
        </h2>
        <div className="flex gap-2">
          <IndianRupee />
          <p>{Price}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onClick}
            className="bg-orange-400 rounded-sm flex justify-center items-center px-16 py-3 text-xs drop-shadow-2xl shadow-black w-fit text-white hover:scale-105 transition duration-200 ease-in-out"
          >
            View
          </button>
          <button
            onClick={onClick}
            className="bg-yellow-400 rounded-sm flex justify-center items-center px-16 py-3 text-xs drop-shadow-2xl shadow-black w-fit text-white hover:scale-105 transition duration-200 ease-in-out"
          >
            Book
          </button>
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
      {/* <div className="LogIn-Resister flex">
        <div className="email-phone">
          <div className="phone">
            <Phone />
            <Link to="#">905678....</Link>
          </div>
          <div className="email">
            <Mail />
            <Link to="#">@aka...@gmail.com</Link>
          </div>
        </div>
        <div className="Mycart">
          <Link to="#">Login</Link>
          <Link to="#">Resister</Link>
          <Link to="#">My Cart</Link>
        </div>
      </div> */}
      <div className="button lg:flex  justify-center items-center  gap-10 mt-10">
        <button className="px-4 py-2 border w-96 bg-orange-400">Gods & Goddesses</button>
        <div>
          <button className="px-4 py-2 border w-96 bg-yellow-400">
            Remedy Pujas/Dosha Puja
          </button>
        </div>
        <button className="px-4 py-2 border w-96 bg-orange-400">Filter</button>
      </div>
      <section className="products border py-6 mt-6 shadow-lg bg-yellow-50">
        <ProductConstant />
      </section>
    </div>
  );
}

export default Index;
