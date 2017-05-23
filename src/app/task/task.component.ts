import { Component, OnInit } from '@angular/core';
import {RowsComponent} from '../rows/rows.component';

@Component({
  moduleId: module.id,
  selector: 'app-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css'],
  directives: [RowsComponent]
})
export class TaskComponent implements OnInit {
  worktasklist = [{},{},{}];

  constructor() {}

  ngOnInit() {
  }

}
