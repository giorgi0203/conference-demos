import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientModule } from './client.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      
      playground: true,
      typePaths: ['./**/*.gql'],
      definitions: {
        path:  './types/graphql.ts',
        outputAs: 'class',
      },
    }),
    MongooseModule.forRoot('mongodb+srv://giorgi0203:M3FKmENXIaloCRUQ@graphql-demo.an2hunb.mongodb.net/?retryWrites=true&w=majority', {

    }),
    ClientModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
