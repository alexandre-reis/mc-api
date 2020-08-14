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

   @Column()
   carne_bovina: Boolean;

   @Column()
   carne_suina: Boolean;

   @Column()
   carne_frango: Boolean;

   @Column()
   salada_verde: Boolean;

   @Column()
   pao: Boolean;

   @Column()
   arroz: Boolean;

   @Column()
   maionese: Boolean;

   @Column()
   quantidade_carne: number;
}
