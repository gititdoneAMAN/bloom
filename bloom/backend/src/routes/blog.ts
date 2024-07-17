import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, decode, verify } from "hono/jwt";
import { postInput, postUpdateInput } from "@amandevbhardwaj/bloom-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const token = c.req.header("Authorization")?.split(" ")[1];
  console.log(token);
  if (token) {
    try {
      const tokenPayload = await verify(token, c.env.JWT_SECRET);

      if (tokenPayload) {
        //@ts-ignore
        c.set("userId", tokenPayload.id);
        console.log(c.get("userId"));
        return await next();
      } else {
        c.status(403);
        return c.json({
          message: "You are not logged in",
        });
      }
    } catch (err) {
      return c.text("Invalid token");
    }
  }
});

blogRouter.post("/create", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const parsedPayload = postInput.safeParse(body);

  if (!parsedPayload.success) {
    c.text("invalid input");
  } else {
    try {
      const date = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`;
      const blogData = await prisma.post.create({
        data: {
          title: body.title,
          content: body.content,
          description: body.description,
          date: date,
          authorId: c.get("userId"),
        },
      });
      return c.json({
        msg: "Blog created",
        id: blogData.id,
      });
    } catch (err) {
      //@ts-ignore
      return c.text(err);
    }
  }
});

blogRouter.put("/update", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const parsedPayload = postUpdateInput.safeParse(body);

  if (!parsedPayload.success) {
    c.text("Invalid input");
  } else {
    try {
      const blogData = await prisma.post.update({
        where: {
          id: body.id,
        },
        data: {
          title: body.title,
          content: body.content,
          description: body.description,
        },
      });
      return c.json({
        msg: "Blog updated",
      });
    } catch (err) {
      return c.text("Error on the put route");
    }
  }
});

blogRouter.get("/individualPage/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogData = await prisma.post.findFirst({
      where: {
        id: c.req.param("id"),
      },
      select: {
        id: true,
        title: true,
        date: true,
        description: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!blogData) {
      c.status(404);
      return c.text("Blog not found");
    } else {
      return c.json(blogData);
    }
  } catch (err) {
    return c.text("Error on the get route");
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const bulkData = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      date: true,
      description: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  if (!bulkData) {
    c.text("No data found");
  } else {
    return c.json(bulkData);
  }
});
