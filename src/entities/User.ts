import { Entity, Column, ObjectIdColumn } from "typeorm";

@Entity()
export default class User {
    @ObjectIdColumn()
    id: number;
    @Column({ type: "string" })
    username: string;
    @Column({ type: "string" })
    password: string;
    @Column({ type: "string" })
    email: string;
}
