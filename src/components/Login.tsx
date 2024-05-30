
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validators/Validator";

type Data = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Data>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  console.log(isValid)

  const onSubmit: SubmitHandler<Data> = (data: Data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="border-2 border-black  rounded-xl w-full flex flex-col items-center space-y-6 py-8 m-8 bg-white mobile:max-w-sm tablet:max-w-xl">
        <div>
          <span className="font-sans text-4xl text-red-600 flex justify-center">
            Login
          </span>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md flex flex-col space-y-4 px-8"
        >
          <div className="w-full flex flex-col">
            <span className="text-xl">
              Email<span className="text-red-400">*</span>:
            </span>
            <label htmlFor="email" aria-required></label>
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

          <div className="m-full flex flex-col">
            <span className="text-xl">
              Password<span className="text-red-400">*</span>:
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

          <Link to={"/signup"} className="text-sm text-gray-600">
            Forgot Password?
          </Link>

          <div className="flex justify-center">
            <button
              type="submit"
              className={`w-full p-1 px-6 rounded-sm text-xl 
    ${
      isValid
        ? "bg-blue-400 text-white"
        : "bg-gray-400 text-gray-200 cursor-not-allowed"
    }`}
              disabled={!isValid}
            >
              Signin
            </button>
          </div>
        </form>

        <div className="w-full flex justify-center gap-1">
          <span className="flex items-center">Don't have an account, </span>
          <Link
            to={"/signup"}
            className="text-blue-800 flex items-center text-xl"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
