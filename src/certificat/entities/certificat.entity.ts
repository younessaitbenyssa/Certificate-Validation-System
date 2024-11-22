import { Code, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Porteur } from "src/porteur/entities/porteur.entity";
import { CodeQr } from "src/code-qr/entities/code-qr.entity";

@Entity()
export class Certificat {

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nom:string;
    @Column()
    dateEmission:Date;

    @ManyToOne(() => Porteur, (porteur) => porteur.certificates)
    @JoinColumn()
    porteur : Porteur;

    @OneToOne(() => CodeQr, codeqr => codeqr.cerftificat)
    @JoinColumn()
    codeqr: CodeQr;


}
