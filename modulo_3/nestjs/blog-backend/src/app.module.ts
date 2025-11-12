import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicsModule } from './basics/basics.module';

@Module({
  imports: [BasicsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
