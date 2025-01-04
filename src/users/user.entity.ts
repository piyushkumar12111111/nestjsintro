import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
//import { Post } from '../post/post.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn()  //! it is generated automatically 
    id: number;

    @Column(
     
        

    )
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    // @OneToMany(() => Post, post => post.user)
    // posts: Post[];

}