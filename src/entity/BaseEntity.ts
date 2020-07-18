import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from "typeorm";

export abstract class BaseEntity {
   
   @PrimaryGeneratedColumn("uuid")
   uid: string;

   @Column({ default: true })
   isPublic: boolean;

   @Column({ default: true })
   isActive: boolean;

   @CreateDateColumn({ type: 'datetime', nullable: true })
   createdAt: Date;

   @UpdateDateColumn({ type: 'datetime', nullable: true })
   updatedAt: Date;

}