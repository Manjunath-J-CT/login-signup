import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { schema } from "./Validator";


type Data = z.infer<typeof schema>;

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: Data) => {
    console.log(data);
  };

  const watchAllFields = watch();

  const isFormValid =
    watchAllFields.firstName && watchAllFields.email && watchAllFields.password;

  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="w-full border-2 flex flex-col space-y-4 rounded-xl m-6 p-4 py-6 border-black bg-white mobile:max-w-sm tablet:max-w-xl">
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
          <div className="w-full max-w-xl flex justify-center gap-3 mobile:flex-col items-center tablet:flex-row">
            <div>
              <span className="text-xl">
                First Name <span className="text-red-400">*</span>:
              </span>
              <label htmlFor="firstName"></label>
              <input
                className="border-2 w-full p-1"
                type="text"
                id="firstName"
                placeholder="First Name"
                {...register("firstName")}
              />
              <span className="text-red-500 text-sm">
                {errors.firstName?.message}
              </span>
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
            <span className="text-xl">
              Email<span className="text-red-400">*</span>:
            </span>
            <label htmlFor="email"></label>
            <input
              className="border-2 w-full p-1"
              type="text"
              id="email"
              placeholder="Enter the email"
              {...register("email")}
            />
            <span className="text-red-500 text-sm">
              {errors.email?.message}
            </span>
          </div>
          <div className="w-full">
            <span className="text-xl">
              Password <span className="text-red-400">*</span>:
            </span>
            <label htmlFor="password"></label>
            <input
              className="border-2 w-full p-1"
              type="password"
              id="password"
              placeholder="Enter Password"
              {...register("password")}
            />
            <span className="text-red-500 text-sm">
              {errors.password?.message}
            </span>
          </div>
          <div>
            <button
              type="submit"
              className={`w-full p-1 px-6 rounded-sm text-xl 
    ${
      isFormValid
        ? "bg-blue-400 text-white"
        : "bg-gray-400 text-gray-200 cursor-not-allowed"
    }`}
              disabled={!isFormValid}
            >
              Register
            </button>
          </div>
        </form>
        <div className="flex justify-center gap-1">
          <span className="flex items-center">Already have an account,</span>
          <Link
            to={"/login"}
            className="text-blue-600 flex items-center text-xl"
          >
            Signin
          </Link>
        </div>
      </div>
    </div>
  );
}
