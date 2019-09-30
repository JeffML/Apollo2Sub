import express from 'express';

import { ApolloServer } from 'apollo-server-express';
import http from 'http';
import { typeDefs } from './schema';
import resolvers from './resolvers';

const PORT = 3031;
const app = express();


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({
  app
});

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`);
});
