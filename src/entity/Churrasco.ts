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

   @Column({ default: false })
   carne_bovina: Boolean;

   @Column({ default: false })
   carne_suina: Boolean;

   @Column({ default: false })
   carne_frango: Boolean;

   @Column({ default: false })
   salada_verde: Boolean;

   @Column({ default: false })
   pao: Boolean;

   @Column({ default: false })
   arroz: Boolean;

   @Column({ default: false })
   maionese: Boolean;

   @Column()
   quantidade_carne: number;
}
