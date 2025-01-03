import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Porteur } from "src/porteur/entities/porteur.entity";
import { Institution } from "src/institution/entities/institution.entity";

@Entity()
export class Certificat {

    @PrimaryColumn('uuid')
    id: string;
    
    @Column()
    nom:string

    @Column()
    dateEmission:Date;

    @Column('longtext')
    imageSVG:string;

    @ManyToOne(() => Porteur, (porteur) => porteur.certificates)
    @JoinColumn()
    porteur : Porteur;

    @ManyToOne(()=>Institution,institution=>institution.certificat)
    @JoinColumn()
    institution:Institution
}
