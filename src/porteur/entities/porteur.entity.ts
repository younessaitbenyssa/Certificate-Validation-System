import { Entity,PrimaryGeneratedColumn, Column } from "typeorm";

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
}
