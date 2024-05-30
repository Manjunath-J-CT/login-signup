
import { z } from "zod";

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
