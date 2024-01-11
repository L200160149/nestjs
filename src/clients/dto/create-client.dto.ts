import { IsAlpha, IsNotEmpty, IsNumber, IsString, isString } from "class-validator";

export class CreateClientDto {
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsAlpha()
    name: string;
    
    @IsNumber()
    age: number;
}