import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
import ErrorMessage from './../errorMessages';
export class CreateTodoDto {

    @IsNotEmpty({
        message: ErrorMessage.isNotEmty
    })
    @MinLength(3, {
        message: ErrorMessage.minLength
    })
    @MaxLength(10,{
        message:  ErrorMessage.minLength
    })
    name :string;

    @IsNotEmpty({
        message: ErrorMessage.isNotEmty
    })
    @MinLength(10,{
        message:  ErrorMessage.minLength
    })
    description: string;
}