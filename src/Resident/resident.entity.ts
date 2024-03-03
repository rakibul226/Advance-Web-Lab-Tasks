import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('resident')
export class ResidentEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  address: string;
  @Column()
  filename: string;
}
