import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength, MaxLength, Matches } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3) 
    firstName: string;
    @IsString()
    @IsOptional()
    @MinLength(3)
    lastName?: string;
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsString( {message: 'Password must be a string'} )
    @IsNotEmpty( {message: 'Password is required'} )
    @MinLength(8 , {message: 'Password must be at least 8 characters long'} )
    @MaxLength(16 , {message: 'Password must be at most 16 characters long'} )
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/ , {message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character'})  //! this is the regex for the password
    password: string;
}
