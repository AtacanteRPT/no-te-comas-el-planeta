import { AngularNoTeComasAlPlanetaPage } from './app.po';

describe('angular-no-te-comas-al-planeta App', () => {
  let page: AngularNoTeComasAlPlanetaPage;

  beforeEach(() => {
    page = new AngularNoTeComasAlPlanetaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
