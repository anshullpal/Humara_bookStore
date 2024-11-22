import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from "axios";
import toast from 'react-hot-toast';

function Signup() {
  const location = useLocation()
  const navigate=useNavigate();
  const from = location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo={
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    }
    await axios.post("http://localhost:4001/user/signup", userInfo).then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('SignUp Successfully!');
        navigate(from, {replace:true});
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))
    }).catch((err)=>{
      if (err.response){
        console.log(err);
        toast.error("Error: " + err.response.data.message);

      }
    });
  }

  return (
    <>
      {/* Full-screen container with flexbox centering */}
      <div
        className="flex h-screen items-center justify-center bg-gray-100"
        style={{ margin: 0, padding: 0 }}
      >
        {/* Card container */}
        <div className="w-[600px] bg-white shadow-md rounded-md p-6">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* Close button */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              {/* Title */}
              <h3 className="font-bold text-lg text-center">Signup</h3>

              {/* Name Field */}
              <div className="mt-4 space-y-2">
                <label>Name</label> <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="mt-4 space-y-2">
                <label>Email</label> <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Password Field */}
              <div className="mt-4 space-y-2">
                <label>Password</label> <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col items-center mt-6">
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200"
                >
                  Signup
                </button>
                <p className="mt-4 text-sm text-center">
                  Have an account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                </p>
                <Login />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
