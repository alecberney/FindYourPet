import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('animal')
export class AnimalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;
}
