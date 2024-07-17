import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, decode, verify } from "hono/jwt";
import { signinInput, signupInput } from "@amandevbhardwaj/bloom-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const parsedPayload = signupInput.safeParse(body);

  if (!parsedPayload.success) {
    return c.text("Invalid input");
  } else {
    try {
      const userData = await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
          password: body.password,
        },
      });

      const payloadData = {
        id: userData.id,
        email: userData.email,
      };

      const token = await sign(payloadData, c.env.JWT_SECRET);

      return c.text(token);
    } catch (err) {
      return c.text("Email already exists");
    }
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const parsedPayload = signinInput.safeParse(body);
  if (!parsedPayload.success) {
    c.text("Invalid input");
  } else {
    try {
      const userData = await prisma.user.findUnique({
        where: {
          email: body.username,
          password: body.password,
        },
      });
      if (!userData) {
        return c.text("No user found");
      } else {
        const tokenPayload = {
          id: userData.id,
          email: userData.email,
        };
        const token = await sign(tokenPayload, c.env.JWT_SECRET);
        return c.text(token);
      }
    } catch (err) {
      return c.text("Error on the signin route");
    }
  }
});
