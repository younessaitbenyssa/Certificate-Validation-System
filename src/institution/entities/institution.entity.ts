import { Certificat } from 'src/certificat/entities/certificat.entity';
import { Entity, Column, PrimaryGeneratedColumn, Long, OneToMany } from 'typeorm';
@Entity()
export class Institution {
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    name : string;
    @Column()
    adresse : string;
    @Column()
    email: string;
    @Column()
    telephone: string;

    @OneToMany(()=>Certificat,certificat=>certificat.institution)
    certificat:Certificat[];
}
