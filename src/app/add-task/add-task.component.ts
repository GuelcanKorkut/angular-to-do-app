import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  title = '';

  constructor() { }

  ngOnInit(): void {
  }

  submitValue(newTitle: string): void  {
    this.submit.emit(newTitle);
  }

}