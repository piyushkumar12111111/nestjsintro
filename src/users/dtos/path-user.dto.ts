import { IsNotEmpty } from "class-validator";
import { IsOptional } from "class-validator";
import { IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { GetUserParamsDto } from "./get-user.dto";
import { CreateUserDto } from "./create-user.dto";

export class PathUserDto extends PartialType(CreateUserDto) {
  
    

}
