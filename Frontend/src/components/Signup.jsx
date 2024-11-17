import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
                  {...register("name", { required: true })}
                />
                {errors.name && (
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
