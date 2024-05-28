import { z } from "zod";

// Define the schema using Zod
export const schema = z.object({
  firstName: z.string().nonempty({ message: "First Name is required" }),
  lastName: z.string().optional(),
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Email is not valid" }),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(8, { message: "Requires at least 8 characters" }),
});
