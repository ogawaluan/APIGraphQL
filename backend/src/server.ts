import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';

import './utils/connection';
import CategoryResolver from './graphql/Category/CategoryResolver';
import VideoResolver from './graphql/Video/VideoResolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [CategoryResolver, VideoResolver],
  });

  const server = new ApolloServer({ schema });

  server.listen({ port: 4100 }, () => console.log('Running!'));
};

bootstrap();