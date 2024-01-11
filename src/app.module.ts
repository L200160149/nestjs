import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './clients/clients.controller';
import { ClientService } from './clients/client.service';
import { ClientModule } from './clients/client.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ClientModule, UserModule, AuthModule],
  controllers: [AppController, ClientsController],
  providers: [AppService, ClientService],
})
export class AppModule {}
