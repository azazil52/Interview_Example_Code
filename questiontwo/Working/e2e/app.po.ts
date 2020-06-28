import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  containsElementWithName(name: string) {
    return element(by.name(name)).isDisplayed();
  }

  containsElementWithClassName(className: string) {
    return element(by.className(className)).isDisplayed();
  }

  registerLink() {
    return element.all(by.linkText('Create an account'));
  }

}
