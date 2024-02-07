import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
@Input() todo: Todo;
@Input() i: number;
@Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
@Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
onClick(todo: Todo) {
  this.todoDelete.emit(todo);
  console.log("onClick has been triggered")

}
ngOnInit(): void {
}
onCheckboxClick(todo: Todo){
  this.todoCheckbox.emit(todo);
}
}
 