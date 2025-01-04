import { Type } from "class-transformer";
import { IsOptional , IsNotEmpty , IsString } from "class-validator";
import { ApiProperty , ApiPropertyOptional } from "@nestjs/swagger";

export class GetUserParamsDto {
     @ApiProperty(
        
     )
    @IsNotEmpty()
    @IsOptional()
    @Type(() => Number)
    id?: string;
}

