import { z } from "zod";

export const signupInput = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export const signinInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

export const postInput = z.object({
  title: z.string(),
  content: z.string(),
  description: z.string().optional(),
});

export const postUpdateInput = z.object({
  title: z.string(),
  content: z.string(),
  description: z.string().optional(),
});

export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type PostInput = z.infer<typeof postInput>;
export type PostUpdateInput = z.infer<typeof postUpdateInput>;
