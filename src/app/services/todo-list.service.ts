import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';

const defaultTodoList: TodoItem[] = [
  // {title: 'App erstellen'},

];

@Injectable({
  providedIn: 'root'
})

export class TodoListService {
  todoList: TodoItem[];

  constructor(private storageService: StorageService) { 
    this.todoList = storageService.getData(todoListStorageKey) || defaultTodoList;
  }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  saveList(): void {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }
  
  addItem(item: TodoItem): void {
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item: TodoItem, changes: any): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  deleteItem(item: TodoItem): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }
}
