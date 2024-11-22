import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CodeQr {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    codeUnique:number;
    @Column()
    image:string;

}
