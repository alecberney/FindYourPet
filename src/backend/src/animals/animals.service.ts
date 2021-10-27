import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AnimalsEntity } from './models/animals.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalsInterface } from './models/animals.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(AnimalsEntity)
    private readonly animalRepository: Repository<AnimalsEntity>,
  ) {}

  createAnimal(animal: AnimalsInterface): Observable<AnimalsInterface> {
    return from(this.animalRepository.save(animal));
  }

  findAllAnimals(): Observable<AnimalsInterface[]> {
    return from(this.animalRepository.find());
  }

  findOneAnimalById(id: number): Observable<AnimalsInterface> {
    return from(this.animalRepository.findOne(id));
  }

  updateAnimal(animal: AnimalsInterface) {
    return from(this.animalRepository.update(animal.id, animal));
  }

  deleteAnimal(id: number) {
    return from(this.animalRepository.delete(id));
  }
}
