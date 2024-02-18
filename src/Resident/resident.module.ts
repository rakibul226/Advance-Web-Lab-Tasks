import { Module } from '@nestjs/common';
import { ResidentService } from './resident.service';
import { residentController } from './resident.controller';

@Module({
  imports: [],
  controllers: [residentController],
  providers: [ResidentService],
})
export class ResidentModule {}
