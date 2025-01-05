
import { Tag } from 'src/tags/tags.entity';
import { User } from 'src/users/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany , ManyToOne, OneToOne, JoinColumn } from 'typeorm';
@Entity()
export class Post {

   
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    userId: number;

    @ManyToOne(() => User, user => user.email)
    user: User;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn() 
    updatedAt: Date;

    @OneToOne(()=> Tag)
    @JoinColumn()  //! responsible for creating the column where it is there 
    tags? : Tag;
}