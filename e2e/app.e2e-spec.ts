import { NgHackerNewsPage } from './app.po';

describe('ng-hacker-news App', () => {
  let page: NgHackerNewsPage;

  beforeEach(() => {
    page = new NgHackerNewsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
