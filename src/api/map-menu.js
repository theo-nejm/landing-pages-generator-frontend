export const mapMenu = (menu = {}) => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_url: link = '',
    menu_link: links = [],
    // logo: { url: srcImg = '' } = '',
  } = menu;

  const srcImg = menu.logo && menu.logo.url ? menu.logo.url : '';

  return {
    newTab,
    text,
    link,
    links: mapMenuLinks(links),
    srcImg,
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((currentLink) => {
    const {
      open_in_new_tab: newTab = false,
      link_text: children = '',
      url: link = '',
    } = currentLink;

    return {
      newTab,
      children,
      link,
    };
  });
};
