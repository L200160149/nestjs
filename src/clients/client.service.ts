import { Injectable } from '@nestjs/common';
import { Client } from './interfaces/client.interface';

@Injectable()
export class ClientService {
    private readonly clients: Client[] = [
        {
            id: 1,
            name: 'Telkomsel',
            age: 25
        },
        {
            id: 2,
            name: 'Indosat',
            age: 30
        }
    ];

    create(client: Client) {
        this.clients.push(client);
    }

    findAll(): Client[] {
        return this.clients;
    }
}