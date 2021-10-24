import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AnimalEntity } from './models/animal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalInterface } from './models/animal.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(AnimalEntity)
    private readonly animalRepository: Repository<AnimalEntity>,
  ) {}

  createAnimal(animal: AnimalInterface): Observable<AnimalInterface> {
    return from(this.animalRepository.save(animal));
  }

  findAllAnimals(): Observable<AnimalInterface[]> {
    return from(this.animalRepository.find());
  }

  findOneAnimalById(id: number): Observable<AnimalInterface> {
    return from(this.animalRepository.findOne(id));
  }
}
