import express from "express";
import server from "./server";
import connectDB from "./db";

(async function startServer() {
  await connectDB();

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 5050 }, () =>
    console.log(`🚀 Server ready at http://localhost:5050${server.graphqlPath}`)
  );
})();
