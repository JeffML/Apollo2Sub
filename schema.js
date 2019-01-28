import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = [
  `
  type Query {
    arg2: String
  }

  type Mutation {
    func2(arg1: String!): Int!,
    func1(arg1: String!, arg2: Int) : Int!

    func2Dump(arg1: String!): Int!,
    func1Dump(arg1: String!, arg2: Int) : Int!
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