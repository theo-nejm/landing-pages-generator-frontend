import { mapData } from './map-data';

describe('mp-data', () => {
  it("should map data even if there isn't data", () => {
    const [pagesData] = mapData();

    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
  });

  it('should map data if there is data', () => {
    const [pagesData] = mapData([
      {
        footer_text: '<p>Heey</p>',
        slug: 'landing-page',
        title: 'Landing page',
      },
    ]);

    expect(pagesData.footerHtml).toBe('<p>Heey</p>');
    expect(pagesData.slug).toBe('landing-page');
    expect(pagesData.title).toBe('Landing page');
  });
});
