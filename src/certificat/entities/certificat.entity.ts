import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Certificat {
    
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nom:string;
    @Column()
    dateEmission:Date;

}
