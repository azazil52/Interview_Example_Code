import { AppPage } from './app.po';

describe('production App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login dialog.', () => {
    // Go to the page
    page.navigateTo();
    // Expecth that ther is an element with the below class name
    expect(page.containsElementWithClassName('login-form')).toEqual(true);
  });

  it('should show registration when "Create an account is clicked"', () => {
    page.navigateTo();
    page.registerLink().click();
    expect(page.containsElementWithClassName('register-form')).toEqual(false);
  });
});
