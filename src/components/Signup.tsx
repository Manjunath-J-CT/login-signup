import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { signupSchema } from "../validators/Validator";

type Data = z.infer<typeof signupSchema>;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm<Data>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: Data) => {
    console.log(data);
  };

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
          <div className="w-full max-w-xl flex gap-3 mobile:flex-col tablet:flex-row">
            <div className="w-full flex-col mobile:max-w-xl tablet:max-w-1/2">
              <span className="text-xl">
                First Name <span className="text-red-400">*</span>:
              </span>
              <label htmlFor="firstName"></label>
              <input
                className="border-2 w-full p-1"
                type="text"
                id="firstName"
                placeholder="First Name"
                {...register("firstName", {
                  onBlur: () => trigger("firstName"),
                  onChange: () => trigger("firstName"),
                })}
              />
              <span className="text-red-500 text-sm">
                {errors.firstName?.message}
              </span>
            </div>
            <div className="w-full flex-col mobile:max-w-xl tablet:max-w-1/2">
              <span className="text-xl">
                Last Name<span className="text-red-400">*</span>:
              </span>
              <label htmlFor="lastName"></label>
              <input
                className="border-2 w-full p-1"
                type="text"
                id="lastName"
                placeholder="Last Name"
                {...register("lastName", {
                  onBlur: () => trigger("lastName"),
                  onChange: () => trigger("lastName"),
                })}
              />
              <span className="text-red-500 text-sm">
                {errors.lastName?.message}
              </span>
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
              {...register("email", {
                onBlur: () => trigger("email"),
                onChange: () => trigger("email"),
              })}
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
              {...register("password", {
                onBlur: () => trigger("password"),
                onChange: () => trigger("password"),
              })}
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
                  isValid
                    ? "bg-blue-400 text-white"
                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
              disabled={!isValid}
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
