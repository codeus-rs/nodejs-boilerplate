import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export default class User {
  @ObjectIdColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  email: string;
}

