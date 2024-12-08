import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Certificat } from "src/certificat/entities/certificat.entity";

@Entity()
export class CodeQr {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    codeUnique:number;
    @Column()
    image:string;    

}
