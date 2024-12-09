import { Entity,PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Certificat } from "src/certificat/entities/certificat.entity";
import { Utilisateur } from "src/utilisateur/entities/utilisateur.entity";

@Entity()
export class Porteur {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string;


    @Column()
    telephone: string;

    @OneToMany(() => Certificat, (Certificat) => Certificat.porteur)
    certificates : Certificat[];

    @OneToOne(()=>Utilisateur,(utilisateur)=>utilisateur.porteur)
    @JoinColumn()
    utilisateur:Utilisateur;
}
