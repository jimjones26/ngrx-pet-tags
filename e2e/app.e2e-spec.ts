import { NgrxPetTagsPage } from './app.po';

describe('ngrx-pet-tags App', () => {
  let page: NgrxPetTagsPage;

  beforeEach(() => {
    page = new NgrxPetTagsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
