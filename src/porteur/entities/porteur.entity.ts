import { Entity,PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Certificat } from "src/certificat/entities/certificat.entity";
import { Utilisateur } from "src/utilisateur/entities/utilisateur.entity";

@Entity()
export class Porteur {
    @PrimaryGeneratedColumn()
    id : number;
    
    @OneToMany(() => Certificat, (Certificat) => Certificat.porteur)
    certificates : Certificat[];

    @OneToOne(()=>Utilisateur,utilisateur=>utilisateur.porteur)
    @JoinColumn()
    utilisateur:Utilisateur;
}
