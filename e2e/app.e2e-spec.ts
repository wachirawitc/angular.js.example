import { IShoppingPage } from './app.po';

describe('i-shopping App', () => {
  let page: IShoppingPage;

  beforeEach(() => {
    page = new IShoppingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
