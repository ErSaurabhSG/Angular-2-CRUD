import { Component } from '@angular/core';
import { TodosComponent } from './todos/todos.component'
import { TodoService } from './todo.service'

@Component({
  moduleId: module.id,
  selector: 'a2-todos-app',
  templateUrl: 'a2-todos.component.html',
  styleUrls: ['a2-todos.component.css'],
  directives: [ TodosComponent ],
  providers: [TodoService]
})
export class A2TODOSAppComponent {
  title = 'a2-todos works!';
}
