import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: `
  {{ item.title }}
`,
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {

  //@Input() item;

  constructor() { }

  ngOnInit(): void {
  }

}
