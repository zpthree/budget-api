import { ApolloServer, gql } from "apollo-server-express";
import { importSchema } from "graphql-import";
import models from "./models";
import * as Query from "./resolvers/Query";
import * as Mutation from "./resolvers/Mutation";
import * as Date from "./resolvers/Date";

const typeDefs = importSchema(`src/schema.graphql`);

export default function createServer() {
  return new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation,
      Date,
    },
    context: ({ req }) => ({ ...req, models }),
  });
}
