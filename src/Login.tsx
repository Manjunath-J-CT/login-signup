import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// type Data = {
//   email: string;
//   password: string;
// };

const schema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Email is not valid" }),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(8, { message: "Password requires at least 8 characters" }),
});

// Infer the data type from the schema
type Data = z.infer<typeof schema>;
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<Data> = (data: Data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="border-2 rounded-xl w-full max-w-xl flex flex-col items-center space-y-6 py-8 m-8">
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
            <span className="text-xl">Email:</span>
            <label htmlFor="email"></label>
            <input
              className="border-2 w-full p-1"
              type="text"
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
            <span className="text-red-500 text-sm">
              {errors.email?.message}
            </span>
          </div>

          <div className="m-full flex flex-col">
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
              className="bg-orange-400 p-1 text-xl px-4 rounded-sm text-white "
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
