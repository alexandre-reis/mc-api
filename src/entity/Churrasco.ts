import { BaseEntity } from "./BaseEntity";
import { Entity, Column } from "typeorm";

@Entity({ name: 'Churrasco' })
export default class Churrasco extends BaseEntity {

   @Column({ type: 'varchar', length: 100 })
   descricao: string;

   @Column()
   id_usuario: number;

   @Column()
   valor_total: number;

   @Column()
   quantidade_pessoas: number;

   @Column()
   data: Date;   
}
