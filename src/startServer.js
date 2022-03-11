import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'

function startServer({ typeDefs, resolvers}) {
  const uri = 'mongodb://127.0.0.1:27017/graphqlDB';

  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
      console.log("we are connected");
    })

  const server = new ApolloServer({ typeDefs, resolvers })
  server.listen().then(({ url }) => console.log(`🚀 server ${url}`))
}

export default startServer