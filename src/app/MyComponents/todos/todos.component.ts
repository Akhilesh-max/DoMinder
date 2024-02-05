import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor () {
    this.todos = [
      {
        sno:1,
        title: "one",
        desc: "nothing to day",
        active: false
  
      },
      {
        sno:2,
        title: "two",
        desc: "nothing to day",
        active: false
  
      },
      {
        sno:3,
        title: "three",
        desc: "nothing to day",
        active: false
  
      }
    ]
  }
  ngOnInit(): void {
  }
}
