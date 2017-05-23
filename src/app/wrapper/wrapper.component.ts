import { Component, OnInit } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { InprgoressComponent } from '../inprgoress/inprgoress.component';
import { DoneComponent } from '../done/done.component';
import { TodosComponent } from '../todos/todos.component';

@Component({
  moduleId: module.id,
  selector: 'app-wrapper',
  templateUrl: 'wrapper.component.html',
  styleUrls: ['wrapper.component.css'],
  directives: [ TaskComponent, InprgoressComponent, DoneComponent, TodosComponent ]
})
export class WrapperComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
