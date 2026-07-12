import { z } from "zod";
import { loginSchema } from "../schemas/authSchema";

export type LoginForm = z.infer<typeof loginSchema>;