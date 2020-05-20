"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
// Construct a schema, using GraphQL schema language
const typeDefs = apollo_server_express_1.gql `
  type Query {
    hello: String
  }
`;
// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => "Hello world!",
    },
};
const server = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers });
exports.default = server;
//# sourceMappingURL=server.js.map