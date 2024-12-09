import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Porteur } from "src/porteur/entities/porteur.entity";
import { ImageCertificat } from "src/image-certificat/entities/image-certificat.entity";
import { Institution } from "src/institution/entities/institution.entity";

@Entity()
export class Certificat {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    dateEmission:Date;

    @ManyToOne(() => Porteur, (porteur) => porteur.certificates)
    @JoinColumn()
    porteur : Porteur;

    @ManyToOne(()=>Institution,institution=>institution.certificat)
    @JoinColumn()
    institution:Institution

    @OneToOne(()=>ImageCertificat,imageCertificat=>imageCertificat.certificat)
    @JoinColumn()
    imageCertificat:ImageCertificat;

}
