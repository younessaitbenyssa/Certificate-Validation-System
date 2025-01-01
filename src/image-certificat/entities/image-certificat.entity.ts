import { Certificat } from "src/certificat/entities/certificat.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ImageCertificat {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    Url: string

    @OneToOne(()=>Certificat,certificat=>certificat.imageCertificat)
    @JoinColumn()
    certificat:Certificat;

}
