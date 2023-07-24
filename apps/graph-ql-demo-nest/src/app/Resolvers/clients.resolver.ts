import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClientService } from '../services/clients.service';
import { Client, CreateClientInput, UpdateClientInput } from '../services/client.model';

@Resolver(() => Client)
export class ClientResolver {
  constructor(private readonly clientService: ClientService) { }

  @Query(() => [Client])
  async clients(): Promise<Client[]> {
    return this.clientService.findAll();
  }

  @Query(() => Client)
  async client(@Args('id') id: string): Promise<Client> {
    return this.clientService.findById(id);
  }

  @Mutation(() => Client)
  async createClient(@Args('input')input: CreateClientInput): Promise<Client> {

    return this.clientService.create(input);
  }

  @Mutation(() => Client)
  async updateClient(@Args('id') id: string,@Args('input') input: UpdateClientInput): Promise<Client> {
    return this.clientService.update(id, input);
  }

  @Mutation(() => Client)
  async deleteClient(@Args('id') id: string): Promise<Client> {
    return this.clientService.delete(id);
  }
}
