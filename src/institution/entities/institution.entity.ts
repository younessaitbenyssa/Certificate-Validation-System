import { Entity, Column, PrimaryGeneratedColumn, Long } from 'typeorm';
@Entity()
export class Institution {
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    adresse : string;
    @Column()
    email: string;
    @Column()
    telephone: number;
}
