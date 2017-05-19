export class A2TODOSPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('a2-todos-app h1')).getText();
  }
}
