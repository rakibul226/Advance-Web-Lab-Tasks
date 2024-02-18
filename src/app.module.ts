import { Module } from '@nestjs/common';
import { ResidentModule } from './Resident/resident.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ResidentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
