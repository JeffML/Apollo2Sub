import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = [
  `
  type Query {
    go: String!
  }
  type Subscription {
    info: String!
  }
`,
];

const options = {
  typeDefs,
  resolvers,
};

const executableSchema = makeExecutableSchema(options);
export default executableSchema;
export { typeDefs };