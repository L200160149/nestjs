import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './clients/clients.controller';
import { ClientService } from './clients/client.service';

@Module({
  imports: [],
  controllers: [AppController, ClientsController],
  providers: [AppService, ClientService],
})
export class AppModule {}
