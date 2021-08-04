import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import { GridContent } from '../../components/GridContent';
import { GridImage } from '../../components/GridImage';
import { GridText } from '../../components/GridText';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { Base } from '../Base';
import { Loading } from '../Loading';
import { Page404 } from '../Page404';

export default function Home() {
  const [pageData, setPageData] = useState({});
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/pages/?slug=landing-page',
        );
        const parsedData = await data.json();
        const pageData = mapData(parsedData);

        await new Promise((r) => {
          setTimeout(() => {
            setPageData(pageData[0]);
            r();
          }, 1500);
        });
      } catch (e) {
        setLoadError(true);
      }
    };

    load();
  }, []);

  if (loadError) return <Page404 />;
  if (pageData && !pageData.slug) return <Loading />;

  const { menu, sections, footerHtml } = pageData;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${pageData.slug}-${index}`;

        switch (component) {
          case 'section.section-two-columns':
            return <GridTwoColumns key={key} {...section} />;
          case 'section.section-content':
            return <GridContent key={key} {...section} />;
          case 'section.section-grid-text':
            return <GridText key={key} {...section} />;
          case 'section.section-grid-image':
            return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}
