"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = apollo_server_express_1.gql `
  type Query {
    hello: String
  }
`;
const resolvers = {
    Query: {
        hello: () => "Hello world!",
    },
};
const server = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers });
exports.default = server;
//# sourceMappingURL=server.js.map