import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, CreateClientInput, UpdateClientInput } from './client.model';

@Injectable()
export class ClientService {
  constructor(@InjectModel(Client.name) private clientModel: Model<Client>) {}

  async findAll(): Promise<Client[]> {
    return this.clientModel.find().exec();
  }

  async findById(id: string): Promise<Client> {
    return this.clientModel.findById(id).exec();
  }

  async create(client: CreateClientInput): Promise<Client> {
    const newClient = new this.clientModel(client);
    return newClient.save();
  }

  async update(id: string, client: UpdateClientInput): Promise<Client> {
    return this.clientModel.findByIdAndUpdate(id, client, { new: true }).exec();
  }

  async delete(id: string): Promise<Client> {
    return this.clientModel.findByIdAndRemove(id).exec();
  }
}
