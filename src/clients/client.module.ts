import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientService } from './client.service';

@Module({
  controllers: [ClientsController],
  providers: [ClientService],
})
export class ClientModule {}