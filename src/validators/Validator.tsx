
import { z } from "zod";

export const signupSchema = z.object({
  firstName: z
    .string()
    .nonempty({ message: "First Name is required" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "First Name should only contain letters and spaces",
    }),
  lastName: z
    .string()
    .nonempty({ message: "Last Name is required" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Last Name should only contain letters and spaces",
    }),
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Email is not valid" }),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(8, { message: "Requires at least 8 characters" }),
});



export const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Email is not valid" }),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(8, { message: "Requires at least 8 characters" }),
});
