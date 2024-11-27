import { IsEmail } from "class-validator";
import { UtilisateurRole } from "src/enums/utilisateur-role.enum";
import { Porteur } from "src/porteur/entities/porteur.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Utilisateur {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    password:string;
    @Column()
    email:string;
    @Column()
    role:UtilisateurRole;

    @OneToOne(()=>Porteur,(porteur)=>porteur.utilisateur)
    porteur:Porteur
}
