import { Entity,PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, PrimaryColumn, ManyToMany } from "typeorm";
import { Certificat } from "src/certificat/entities/certificat.entity";
import { Utilisateur } from "src/utilisateur/entities/utilisateur.entity";
import { Institution } from "src/institution/entities/institution.entity";

@Entity()
export class Porteur {
    @PrimaryColumn()
    CIN:string

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
