import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalsEntity } from './models/animals.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalsEntity])],
  providers: [AnimalsService],
  controllers: [AnimalsController],
})
export class AnimalsModule {}
