import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object if there isnt data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.link).toBe('');
  });

  it('should map menu to match required keys and values', () => {
    const menu = mapMenu({
      open_in_new_tab: false,
      logo_text: 'Landing Page',
      logo_url: '#home',
      menu_link: [
        {
          open_in_new_tab: false,
          link_text: 'intro',
          url: '#intro',
        },
        {
          open_in_new_tab: false,
          link_text: 'grid-one',
          url: '#grid-one',
        },
        {
          open_in_new_tab: false,
          link_text: 'gallery',
          url: '#gallery',
        },
        {
          open_in_new_tab: false,
          link_text: 'grid-two',
          url: '#grid-two',
        },
        {
          open_in_new_tab: false,
          link_text: 'pricing',
          url: '#pricing',
        },
        {
          open_in_new_tab: false,
          link_text: 'contact',
          url: '#contact',
        },
      ],
      logo: {
        url: 'image.svg',
      },
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Page');
    expect(menu.srcImg).toBe('image.svg');
    expect(menu.link).toBe('#home');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('intro');
    expect(menu.links[0].link).toBe('#intro');
  });

  it('should return an empty array if there isnt links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should map links if links there are links', () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        link_text: 'intro',
        url: '#intro',
      },
      {},
    ]);

    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('intro');
    expect(links[0].link).toBe('#intro');
  });
});
