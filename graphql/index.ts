import { ApolloServer, gql} from "apollo-server-azure-functions";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
     nosql: String
    demo : String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello from our GraphQL backend!",
     nosql: () => "Hello from Rahul",
    demo:  () => "hello from demo",
  },
};

// @ts-ignore
const server = new ApolloServer({
  typeDefs,
  resolvers,
  debug: true
});

export default server.createHandler({
  cors: {
    origin: ['*', "https://studio.apollographql.com"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["access-control-allow-credentials", "access-control-allow-origin", "content-type"]
  },
});
