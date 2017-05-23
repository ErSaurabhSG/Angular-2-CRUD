import { Component, OnInit } from '@angular/core';
import {RowsComponent} from '../rows/rows.component';

@Component({
  moduleId: module.id,
  selector: 'app-done',
  templateUrl: 'done.component.html',
  styleUrls: ['done.component.css'],
  directives: [RowsComponent]
})
export class DoneComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
