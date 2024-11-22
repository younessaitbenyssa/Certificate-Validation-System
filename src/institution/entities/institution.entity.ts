import { Certificat } from 'src/certificat/entities/certificat.entity';
import { Entity, Column, PrimaryGeneratedColumn, Long, OneToMany } from 'typeorm';
@Entity()
export class Institution {
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    adresse : string;
    @Column()
    email: string;
    @Column()
    telephone: number;

    @OneToMany(()=>Certificat,certificat=>certificat.institution)
    certificat:Certificat[]
}
