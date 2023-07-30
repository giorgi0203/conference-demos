import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientResolver } from './Resolvers/clients.resolver';
import { ClientSchema } from './services/client.model';
import { ClientService } from './services/clients.service';
import { Client } from './types/graphql';

@Module({
  imports: [MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }])],
  providers: [ClientResolver, ClientService],
})
export class ClientModule {}
