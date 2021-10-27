import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('animals')
export class AnimalsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;
}
