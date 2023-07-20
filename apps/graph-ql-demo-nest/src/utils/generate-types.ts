import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['../**/*.gql'],
  path:  '../app/types/graphql.ts',
  outputAs: 'class',
});