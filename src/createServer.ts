import { ApolloServer, gql } from "apollo-server-express";
const { importSchema } = require("graphql-import");
import models from "@models/index";
import * as Query from "@resolvers/Query";
import * as Mutation from "@resolvers/Mutation";

const typeDefs = importSchema(`src/schema.graphql`);

export default function createServer() {
  return new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation,
    },
    context: ({ req }) => ({ ...req, models }),
  });
}
