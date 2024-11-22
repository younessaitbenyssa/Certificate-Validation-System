import { Entity,PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Certificat } from "src/certificat/entities/certificat.entity";

@Entity()
export class Porteur {
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    nom_complet: string;
    @Column()
    email: string;
    @Column()
    telephone: number;
    @OneToMany(() => Certificat, (Certificat) => Certificat.porteur)
    certificates : Certificat[];
}
