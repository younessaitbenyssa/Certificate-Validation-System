import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ImageCertificat {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    Url: string
    @Column()
    idCertificat: number
}
