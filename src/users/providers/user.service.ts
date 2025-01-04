import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GetUserParamsDto } from "../dtos/get-user.dto";
import { User } from "../user.entity";
import { CreateUserDto } from "../dtos/create-user.dto";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    public async createUser(createUserDto: CreateUserDto) {
        const existingUser = await this.userRepository.findOneById(createUserDto.email);
        // Add logic to handle existingUser
    }

    public findAll(getUserParamsDto: GetUserParamsDto, limit: number) {
        return [
            {
                firstname: "hello world",
                email: "ho@gmail.com"
            }
        ];
    }

    public findOneById(id: number) {
        return {
            id: "1221",
            firstname: "hello world",
            email: "ho@gmail.com"
        };
    }
}