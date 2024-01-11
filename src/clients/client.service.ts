import { Injectable } from '@nestjs/common';
import { Client } from './interfaces/client.interface';

@Injectable()
export class ClientService {
  private readonly clients: Client[] = [];

  create(client: Client) {
    this.clients.push(client);
  }

  findAll(): Client[] {
    return this.clients;
  }
}