import { Certificat } from "src/certificat/entities/certificat.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ImageCertificat {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    Url: string

    @Column()
    idCertificat: number

    @OneToOne(()=>Certificat,certificat=>certificat.imageCertificat)
    certificat:Certificat;

}
