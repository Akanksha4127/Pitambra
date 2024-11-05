import React, { useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

import { ContactBanner, Pujari2, Pujari1 } from "../utility/AllImages";

function Contact() {
  const formRef = useRef(null);



  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Create a FormData object from the form reference
    const formData = new FormData(formRef.current);
    const phoneNumber = formData.get("phone");

    if (phoneNumber && phoneNumber.length != 10) {
      alertError("Phone number must have 10 digits!");
      return;
    }

    const Response = await fetchFromAPI("form/contact-us", "post", formData);

    alertSuccess(Response.data.message);
    console.log(Response);
  };



  const PujariCard = ({ Photo, Heading, Name, Passion }) => {
    return (
      <div className="flex  flex-col gap-6 mt-3 text-[#432B1E]  w-72 rounded-md p-4 shadow-lg">
        <section className="flex flex-col items-center justify-center">
          <img src={Photo} className="h-40 w-40 rounded-full object-cover  shadow-lg hover:scale-105 transition duration-100 ease-in" />
          <h1 className="text-md tracking-tighter font-bold">{Heading}</h1>
          <p className="text-sm">{Name}</p>
          <p className="text-sm">{Passion}</p>
        </section>
      </div>
    );
  };
  const PujariProfile = () => {
    return (
      <div>
        <div className=" m-6 lg:flex lg:mx-10  mt-2 gap-60  justify-center items-center  text-sm ">
          <PujariCard
            Photo={Pujari1}
            Heading={"मुख्य पुजारी"}
            Name={`श्री अशोक कुमार तिवारी`}
            Passion={"मातृ उपासक, दैवज्ञ एवं साधक"}
          />
          <PujariCard
            Photo={Pujari2}
            Heading={"महंत रोहित शर्मा"}
            Name={`श्री पीतांबरा सूर्य नारायण मन्दिर`}
            Passion={"राष्ट्रीय महासचिव अखिल भारतीय मंदिर परिषद"}
          />
        </div>
      </div>
    );
  };


  return (
    <div className="border-1 mt-1 text-justify ">
      <div className="AartiImg ">
        <img src={ContactBanner} className=" w-full lg:h-[70vh]" />
      </div>

      <section className="pujari">
        <PujariProfile />
      </section>

      <div className="text-black lg:flex p-4 justify-center mb-6 w-full h-fit font-serif  ">
        <section className="ContactDetails px-4 py-4 lg:w-1/2  flex-col gap-10  laptop:m-4 rounded-lg border-black bg-orange-700 text-white text-opacity-60 shadow-2xl ">
          <h1 className="text-center m-10 text-2xl font-semibold">पता :</h1>
          <div className="Address items-center m-6 flex gap-2">
            <a>
              <MapPin size={24} />
            </a>
            <a>
              यू ब्लॉक, सेक्टर 109, द्वारका एक्सप्रेसवे, गुरुग्राम हरियाणा, पिन
              कोड- 122001
            </a>
          </div>
          <div className="Phone items-center flex gap-2 m-6">
            <a>
              <Phone size={24} />
            </a>
            <a href="#">9810258654, 9868079570, 9311372570</a>
          </div>

          <div className="Email flex items-center m-6 gap-2">
            <a>
              <Mail size={24} />
            </a>
            <a href="#">mailto:pardeepkumar4bjp@gmail.com</a>
          </div>

          <div className="flex justify-center m-10">
            <ul className="flex  justify-center gap-2 -mt-1 ">
              <li className="h-8 w-8 rounded-full bg-[#b6883f] hover:scale-105 transition duration-200 ease-in-out">
                <Link to="/" className="">
                  <Facebook
                    size={18}
                    color="white"
                    className=" ml-1.5 mt-1.5"
                  />
                </Link>
              </li>
              <li className="h-8 w-8 rounded-full bg-[#b6883f] hover:scale-105 transition duration-200 ease-in-out">
                <Link to="/">
                  <Instagram size={17} color="white" className=" ml-2 mt-1.5" />
                </Link>
              </li>
              <li className="h-8 w-8 rounded-full bg-[#b6883f] hover:scale-105 transition duration-200 ease-in-out">
                <Link to="/" className="">
                  <Twitter size={18} color="white" className=" ml-2 mt-1.5" />
                </Link>
              </li>
              <li className="h-8 w-8 rounded-full bg-[#b6883f] hover:scale-105 transition duration-200 ease-in-out">
                <Link to="/" className="">
                  <Youtube size={18} color="white" className=" ml-2 mt-1.5" />
                </Link>
              </li>
              <li className="h-8 w-8 rounded-full bg-[#b6883f] hover:scale-105 transition duration-200 ease-in-out">
                <Link to="/" className="">
                  <Linkedin size={18} color="white" className=" ml-2 mt-1.5" />
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="Form_side lg:w-1/2 ">
          <form
            ref={formRef}
            className="Form lg:flex lg:flex-wrap justify-center mt-10 p-2 laptop:mx-20 "
          >
            <div className="laptop:flex ">
              <div className="name lg:w-72 m-5 ">
                <label className="block mb-2 text-lg w-fit font-serif txt-Gray ">
                  Name
                </label>
                <input
                  type="email"
                  className=" border-l-2 border-b-2 backdrop-blur-xl border-red-600/30 txt-light-brown text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-900 dark:text-black drop-shadow-xl focus:outline-none"
                  placeholder="Jhon doe"
                  name="name"
                  required
                />
              </div>

              <div className="email lg:w-72 m-5">
                <label className="block mb-2 text-lg w-fit font-serif txt-Gray">
                  Email
                </label>
                <input
                  type="email"
                  className=" border-l-2 border-b-2 backdrop-blur-xl border-red-600/30 txt-light-brown text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-900 dark:text-black drop-shadow-xl focus:outline-none"
                  placeholder="user@gmail.com"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="laptop:flex">
              <div className="Phone lg:w-72 m-5">
                <label className="block mb-2 text-lg w-fit font-serif txt-Gray">
                  Phone Number
                </label>
                <input
                  type="number"
                  className=" border-l-2 border-b-2 backdrop-blur-xl border-red-600/30 txt-light-brown text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-900 dark:text-black drop-shadow-xl focus:outline-none"
                  placeholder="9955******"
                  name="phone"
                  required
                />
              </div>

              <div className="Subject lg:w-72 m-5">
                <label className="block mb-2 text-lg w-fit font-serif txt-Gray">
                  Subject
                </label>
                <input
                  type="text"
                  className=" border-l-2 border-b-2 backdrop-blur-xl border-red-600/30 txt-light-brown text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-900 dark:text-black drop-shadow-xl focus:outline-none"
                  placeholder="Enter the subject"
                  name="subject"
                  required
                />
              </div>
            </div>

            <div className="Message lg:w-72 m-5">
              <label className="block mb-2 text-lg w-fit font-serif txt-Gray">
                Message
              </label>
              <textarea
                type="text"
                className=" border-l-2 border-b-2 backdrop-blur-xl border-red-600/30 txt-light-brown text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-900 dark:text-black drop-shadow-xl focus:outline-none"
                placeholder="Enter your message here!"
                name="message"
                required
              />
            </div>
          </form>

          {/* submit btn */}
          <div className="submit-btn flex justify-center m-10">
            <button
              onClick={handleSubmit}
              className=" bg-orange-500 text-white py-2 px-7 rounded-lg drop-shadow-xl hover:drop-shadow-2xl hover:bg-zinc-700 transition duration-300 hover:scale-105 "
            >
              Submit
            </button>
          </div>
        </section>
      </div>

      {/* <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7012.081810766066!2d77.004632!3d28.508417!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMwJzMwLjMiTiA3N8KwMDAnMTYuNyJF!5e0!3m2!1sen!2sin!4v1729246613525!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen="yes"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
    </div>
  );
}

export default Contact;
