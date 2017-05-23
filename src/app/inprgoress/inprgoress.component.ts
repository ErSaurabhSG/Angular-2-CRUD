import { Component, OnInit } from '@angular/core';
import {RowsComponent} from '../rows/rows.component';

@Component({
  moduleId: module.id,
  selector: 'app-inprgoress',
  templateUrl: 'inprgoress.component.html',
  styleUrls: ['inprgoress.component.css'],
  directives: [RowsComponent] 
})
export class InprgoressComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
