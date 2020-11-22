import { Controller, Get, Post, Put, Body, Delete} from '@nestjs/common';
import { Todo } from './models/todo.model';
import { TodoStatusEnum } from './enums/todo-status.enum';
import { Param } from '@nestjs/common';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  
  constructor(private todoService: TodoService) {
  }


  @Get('')
  getTodos() {
    return this.todoService.getTodos();
  }

  @Get('/:id')
  getToDo(
    @Param ('id') id:string
  )  {
    return(this.todoService.getToDo(id));
    
  }

  @Post('')
  addToDo(
    @Body() newTodo: CreateTodoDto
  ) {return(this.todoService.addToDo(newTodo));
  }


  @Put('/:id/:name/:description/:status') 
  updateToDo(    
    @Param('id') id: string,
    @Body() newTodo: UpdateTodoDto
  ) { return this.todoService.updateToDo(id,newTodo);
  }


  @Delete('/:id') 
  deleteTodo( @Param('id') id: string) {
 return this.todoService.deleteTodo(id);
  } 
}
