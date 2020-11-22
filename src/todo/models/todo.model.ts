import { TodoStatusEnum } from '../enums/todo-status.enum';
import { v4 as uuid } from 'uuid';
export class Todo {
  id: string = uuid();
  name: string;
  description: string;
  createdAt: Date;
  status: TodoStatusEnum;
  constructor(
    name = '',
    description = '',
    status = TodoStatusEnum.waiting) {
    this.name = name;
    this.description = description;
    this.createdAt = new Date();
    this.status = status;
  }
}
