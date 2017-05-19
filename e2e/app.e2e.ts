import { A2TODOSPage } from './app.po';

describe('a2-todos App', function() {
  let page: A2TODOSPage;

  beforeEach(() => {
    page = new A2TODOSPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('a2-todos works!');
  });
});
