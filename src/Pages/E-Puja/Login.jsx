import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { parseErrorMessage } from "../../utility/ErrorMessageparser";
import { alertInfo, alertSuccess } from "../../utility/Alert";

function Login() {
  // Utility variables
  const FormRef = useRef(null);
  const [showPassword, setShowPassword] = useState("password");
  const navigate = useNavigate();

  // All function
  const handelSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(FormRef.current);

    try {
      const response = await FetchData("user/login", "post", formData);

      console.log(response);

      //   // Storing the tokens into browser's local storage
      //   localStorage.clear(); // will clear the all the data from localStorage
      //   localStorage.setItem(
      //     "AccessToken",
      //     response.data.data.tokens.AccessToken
      //   );
      //   localStorage.setItem(
      //     "RefreshToken",
      //     response.data.data.tokens.RefreshToken
      //   );

      // Navigate to home page and show success message
      navigate("/");
      alertSuccess(response.data.message);
    } catch (error) {
      console.log(error);
      alertError(parseErrorMessage(error.response.data));
    }
  };
  return (
    <div className=" ">
      <div className="text-white shadow-lg flex flex-col  justify-center items-center gap-10 w-full h-full   border-black">
        <h1 className="text-center mt-10  text-3xl text-amber-600  underline font-bold font-serif">
          Login
        </h1>

        <section className="Form_side bg-white border-2  p-2 h-[60vh]  rounded-lg shadow-2xl  mb-10">
          <form
            ref={FormRef}
            onSubmit={handelSubmit}
            className="Form  flex flex-col justify-center items-center "
          >
            <div className="Email w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-orange-400   font-Philosopher">
                Email
              </label>
              <input
                type="email"
                className="border-b-2 border-2 rounded-lg shadow-2xl px-4 py-3 border-yellow-200 w-full outline-none "
                placeholder="joe@example.com"
                name="email"
                required
              />
            </div>
            <div className="password relative w-72 m-5">
              <label
                htmlFor="password"
                className="block mb-2 text-orange-400  text-lg font-semibold w-fit  font-Philosopher "
              >
                Password
              </label>
              <input
                type={`${showPassword}`}
                className="border-b-2 border-2 rounded-lg shadow-lg px-4 py-3 border-yellow-200 w-full outline-none "
                placeholder="@1234"
                name="password"
                required
              />

              {/* show and hide password */}
              <div className="absolute right-2 top-10">
                {showPassword === "password" ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPassword("text");
                    }}
                    className="ml-2 text-sm text-orange-600"
                  >
                    <EyeOff />
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPassword("password");
                    }}
                    className="ml-2 mt-2 text-sm text-orange-600"
                  >
                    <Eye />
                  </button>
                )}
              </div>
            </div>
            <div className="LoginButton flex justify-center">
              <button
                className=" text-white bg-orange-500 hover:bg-orange-600   font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none hover:text-md transition ease-in-out delay-250"
                type="submit"
              >
                login
              </button>
            </div>
          </form>

          <div className="Sign_UP_Options mb-3">
            <h3 className="text-center text-black text-opacity-80">
              Don't have an account ?
              <Link to={"/register"} className="text-orange-400">
                Register
              </Link>
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
