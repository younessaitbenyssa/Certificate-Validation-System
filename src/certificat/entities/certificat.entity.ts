import { ImageCertificat } from "src/image-certificat/entities/image-certificat.entity";
import { Institution } from "src/institution/entities/institution.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Certificat {

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nom:string;
    @Column()
    dateEmission:Date;

    @ManyToOne(()=>Institution,institution=>institution.certificat)
    @JoinColumn()
    institution:Institution

    @OneToOne(()=>ImageCertificat,imageCertificat=>imageCertificat.certificat)
    @JoinColumn()
    imageCertificat:ImageCertificat;

}
