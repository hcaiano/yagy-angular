import { YagyAngularPage } from './app.po';

describe('yagy-angular App', function() {
  let page: YagyAngularPage;

  beforeEach(() => {
    page = new YagyAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
