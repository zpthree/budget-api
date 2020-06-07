import express from "express";
import createServer from "./createServer";
import connectDB from "./db";

const server = createServer();

(async function startServer() {
  await connectDB();

  const app = express();
  server.applyMiddleware({ app });

  const port: number = 5050;

  app.listen({ port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  );

  app.get("/", (req, res, next) => {
    res.redirect("/graphql");
    next();
  });
})();
