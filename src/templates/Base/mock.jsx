import linksMock from '../../components/NavBar/mock';
import gridTextMock from '../../components/GridText/mock';
import gridImageMock from '../../components/GridImage/mock';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

export const templateMock = {
  children: (
    <div>
      <GridText {...gridTextMock} />
      <GridImage {...gridImageMock} background />
      <GridText {...gridTextMock} />
      <GridImage {...gridImageMock} background />
      <GridText {...gridTextMock} />
    </div>
  ),
  links: linksMock,
  footerHtml: '<i>Made with <3 by <b>Theo Nejm</b></i>',
  logoData: {
    text: 'Minha logo',
    srcImg: 'assets/images/logo-lp.svg',
    link: '#',
  },
};
