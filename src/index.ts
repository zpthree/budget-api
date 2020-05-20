import express from "express";
import server from "./server";
import connectDB from "./db";
import { test } from "@lib/test";

(async function startServer() {
  await connectDB();

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 5050 }, () =>
    console.log(`🚀 Server ready at http://localhost:5050${server.graphqlPath}`)
  );

  app.get("/", (req, res, next) => {
    res.redirect("/graphql");
    next();
  });
})();
