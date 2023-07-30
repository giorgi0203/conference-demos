import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['../**/*.gql'],
  path:  join(process.cwd(), 'apps/graph-ql-demo-nest/src/app/types/graphql.ts'),
  outputAs: 'class',
});