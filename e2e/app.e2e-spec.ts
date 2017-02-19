import { BalalaykaPage } from './app.po';

describe('balalayka App', () => {
  let page: BalalaykaPage;

  beforeEach(() => {
    page = new BalalaykaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
