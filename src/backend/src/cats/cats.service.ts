import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  create() {}

  findAll(): string {
    return 'find all';
  }
}
