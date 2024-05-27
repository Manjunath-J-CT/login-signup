import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type Data = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function Signup() {
  const { register, handleSubmit, formState:{errors} } = useForm<Data>();

  const onSubmit = (data: Data) => {
    console.log(data);
  };
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="w-full max-w-xl border-2 flex flex-col space-y-4 rounded-xl m-6 p-4 py-6 border-black bg-white">
        <div>
          <span className="w-full max-w-xl font-sans text-3xl text-red-600 flex justify-center">
            Create an Account
          </span>
          <hr />
        </div>
        <form
          className="w-full max-w-xl flex flex-col items-center p-8 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full max-w-xl flex justify-center gap-3">
            <div>
              <span className="text-xl">First Name:</span>
              <label htmlFor="firstName"></label>
              <input
                className="border-2 w-full p-1"
                type="text"
                id="firstName"
                placeholder="First Name"
                {...register("firstName",
                  {required:"First Name is Required"}
                )}
              />
            <span className="text-red-500 text-sm">{errors.firstName?.message}</span>
              
            </div>
            <div>
              <span className="text-xl">Last Name:</span>
              <label htmlFor="lastName"></label>
              <input
                className="border-2 w-full p-1"
                type="text"
                id="lastName"
                placeholder="Last Name"
                {...register("lastName")}
              />
            </div>
          </div>
          <div className="w-full">
            <span className="text-xl">Email:</span>
            <label htmlFor="email"></label>
            <input
              className="border-2 w-full p-1"
              type="email"
              id="email"
              placeholder="Enter the email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid",
                },
              })}
            />
            <span className="text-red-500 text-sm">{errors.email?.message}</span>
          </div>
          <div className="w-full">
            <span className="text-xl">Password:</span>
            <label htmlFor="password"></label>
            <input
              className="border-2 w-full p-1"
              type="password"
              id="password"
              placeholder="Enter Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Requires atleast 8 character",
                },
              })}
            />
            <span className="text-red-500 text-sm">{errors.password?.message}</span>

            
          </div>
          <div>
            <button className="bg-blue-400 w-full p-1  px-6 rounded-sm text-white text-xl">
              Register
            </button>
          </div>
        </form>
        <div className="flex justify-center gap-1">
          <span className="flex items-center">Already have an account,</span>
          <Link
            to={"/login"}
            className="text-orange-600 flex items-center text-xl"
          >
            Signin
          </Link>
        </div>
      </div>
    </div>
  );
}
