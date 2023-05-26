import 'reflect-metadata';

import path from 'node:path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import { BooksResolver } from './src/resolvers/books-resolver';

async function initServer() {
    const schema = await buildSchema({
        resolvers: [BooksResolver],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    });

    const server = new ApolloServer({
        schema,
    });

    server.listen().then(({ url }) => console.log(`🚀 Server running on ${url}`));
}

initServer();
