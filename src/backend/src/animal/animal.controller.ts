import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalInterface } from './models/animal.interface';
import { Observable } from 'rxjs';

@Controller('animal')
export class AnimalController {
  constructor(private animalService: AnimalService) {}

  @Post()
  create(@Body() animal: AnimalInterface): Observable<AnimalInterface> {
    return this.animalService.createAnimal(animal);
  }

  @Get()
  findAll(): Observable<AnimalInterface[]> {
    return this.animalService.findAllAnimals();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<AnimalInterface> {
    return this.animalService.findOneAnimalById(parseInt(id));
  }
}
