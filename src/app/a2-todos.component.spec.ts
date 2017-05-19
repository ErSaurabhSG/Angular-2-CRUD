import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { A2TODOSAppComponent } from '../app/a2-todos.component';

beforeEachProviders(() => [A2TODOSAppComponent]);

describe('App: A2TODOS', () => {
  it('should create the app',
      inject([A2TODOSAppComponent], (app: A2TODOSAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'a2-todos works!\'',
      inject([A2TODOSAppComponent], (app: A2TODOSAppComponent) => {
    expect(app.title).toEqual('a2-todos works!');
  }));
});
