import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalEntity } from './models/animal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalEntity])],
  providers: [AnimalService],
  controllers: [AnimalController],
})
export class AnimalModule {}
