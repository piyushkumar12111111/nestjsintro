import { Type } from "class-transformer";
import { IsOptional , IsNotEmpty , IsString } from "class-validator";

export class GetUserParamsDto {
  
    @IsNotEmpty()
    @IsOptional()
    @Type(() => Number)
    id?: string;
}

