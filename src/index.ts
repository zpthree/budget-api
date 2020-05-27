import express from "express";
import createServer from "./createServer";
import connectDB from "./db";
import { test } from "./lib/test";

const server = createServer();

(async function startServer() {
  await connectDB();

  const app = express();
  server.applyMiddleware({ app });

  const PORT: number = 5050;

  app.listen({ port: PORT }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );

  app.get("/", (req, res, next) => {
    res.redirect("/graphql");
    next();
  });
})();
