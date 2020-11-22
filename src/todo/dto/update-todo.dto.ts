import { TodoStatusEnum } from "../enums/todo-status.enum";
import { CreateTodoDto } from "./create-todo.dto";
import ErrorMessage from './../errorMessages';
import { IsIn, IsOptional, MaxLength, MinLength } from "class-validator";

export class UpdateTodoDto {

    @IsOptional()
    @MinLength(3, {
        message: ErrorMessage.minLength
    })
    @MaxLength(10,{
        message:  ErrorMessage.minLength
    })
    name :string;

    @IsOptional()
    @MinLength(10,{
        message:  ErrorMessage.minLength
    })
    description: string;

    @IsIn([
        TodoStatusEnum.actif,
        TodoStatusEnum.done,
        TodoStatusEnum.waiting
    ],{
        message: ErrorMessage.invalidStatus
    }
    )
    @IsOptional()
    status: TodoStatusEnum;
}