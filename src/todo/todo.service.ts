import { Injectable } from '@nestjs/common';
import{ Todo } from './models/todo.model';
import {TodoStatusEnum } from './enums/todo-status.enum';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
@Injectable()
export class TodoService {

    private todos = [];
    constructor() {
        this.todos = [
          new Todo('cook', 'cook breakfast', TodoStatusEnum.actif)
        ]
      }

    private findTodoById(id: string): Todo  {
        const todo = this.todos.find( (actualTodo) => actualTodo.id === id );
        return todo;
      }

      getTodos() {
        return this.todos;
      }
      getToDo(id:string)  {
      const todo = this.todos.find( (actualTodo) => actualTodo.id === id );
      if(todo) {
        return(todo);
        }
      }
      addToDo(newTodo: CreateTodoDto) {
        const {name, description} =newTodo;
        const todo = new Todo();
        todo.name=name;
        todo.description=description;
        this.todos.push(todo);
        return(todo);
      }
      updateToDo(    
        id: string,
        newTodo: UpdateTodoDto) {
        const {name, description} =newTodo;
        const todo = this.findTodoById(id);
        todo.name=name?name:todo.name ;
        todo.description=description?description:todo.description;
        todo.status=TodoStatusEnum.actif?TodoStatusEnum.actif:todo.status;
       return todo;
      }

      deleteTodo(id: string) {
        const todo = this.findTodoById(id);
        this.todos.splice(this.todos.indexOf(todo), 1);
        return this.todos
      } 
}
