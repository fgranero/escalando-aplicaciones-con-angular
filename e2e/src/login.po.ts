import { browser, by, element } from 'protractor';

export class LoginPage {
  selectors = {
    'form' : 'form',
    'email': 'input[name="email"]',
    'password': 'input[name="password"]',
    'checkbox' : 'input[name="rememberMe"]',
    'selectGroup' : 'mat-select',
    'loginButton' : 'button',
  };

  navigateToLogin() {
    return browser.get('/login');
  }

  setEmail(text) {
    element(by.css(this.selectors['email'])).sendKeys(text);
  }

  setPassword(text) {
    element(by.css(this.selectors['password'])).sendKeys(text);
  }

  selectGroupOptionLastValue() {
    element(by.css(this.selectors['selectGroup'])).click()
    .then(() => element.all(by.css('mat-option')).last().click());
  }
  logIn() {
    element(by.css(this.selectors['form'])).submit();
  }
}
