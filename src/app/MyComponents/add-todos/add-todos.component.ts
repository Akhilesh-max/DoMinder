import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrl: './add-todos.component.css'
})
export class AddTodosComponent implements OnInit{
 title: string
 desc: string
 @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

 constructor() {
  
 }

  ngOnInit(): void {
      
  }
  onSubmit(){
    console.log("test 1")
    const todo = {
      sno : 8,
      title : this.title,
      desc : this.desc,
      active : true
    }
    this.todoAdd.emit(todo);
  }
}
