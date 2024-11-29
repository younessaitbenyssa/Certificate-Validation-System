import { Certificat } from 'src/certificat/entities/certificat.entity';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { Entity, Column, PrimaryGeneratedColumn, Long, OneToMany, OneToOne, JoinColumn } from 'typeorm';
@Entity()
export class Institution {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    adresse : string;
    @Column()
    telephone: string;
    @Column()
    name: string

    @OneToMany(()=>Certificat,certificat=>certificat.institution)
    certificat:Certificat[];

    @OneToOne(()=>Utilisateur,Utilisateur=>Utilisateur.institution)
    @JoinColumn()
    utilisateur:Utilisateur;
}
