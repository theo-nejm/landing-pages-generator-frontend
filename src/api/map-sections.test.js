import {
  mapImageGrid,
  mapSectionContent,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';
import {
  imageGridData,
  imageGridDataWithoutImages,
  imageGridDataWoUrlAndAltText,
} from './mocks/imageGridData';
import { sectionContentData } from './mocks/sectionContentData';
import { sectionTwoColumnsData } from './mocks/sectionTwoColumnsData';
import { textGridData } from './mocks/textGridData';

describe('map sections', () => {
  it('should map section-two-columns without data', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section-two-columns with data', () => {
    const data = mapSectionTwoColumns(sectionTwoColumnsData);
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('image.svg');
    expect(data.title).toBe('january brings us firefox 85');
    expect(data.text).toBe('Lorem ipsum dolor');
  });

  it('should map section content without content', () => {
    const data = mapSectionContent();

    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map section content with content', () => {
    const data = mapSectionContent(sectionContentData);

    expect(data.component).toBe('section.section-content');
    expect(data.title).toBe('new coverage and some surprises');
    expect(data.html).toBe(
      '<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.</p><p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><p>We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>',
    );
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('intro');
  });

  it('should map grid text section with content', () => {
    const data = mapTextGrid(textGridData);

    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe(
      'Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut.',
    );
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid).toEqual([
      {
        __v: 0,
        _id: '6102f2fe22a1932f022c0e9e',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        id: '6102f2fe22a1932f022c0e9e',
        title: 'Teste 1',
      },
      {
        __v: 0,
        _id: '6102f2fe22a1932f022c0e9f',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        id: '6102f2fe22a1932f022c0e9f',
        title: 'Teste 2',
      },
      {
        __v: 0,
        _id: '6102f2fe22a1932f022c0ea0',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        id: '6102f2fe22a1932f022c0ea0',
        title: 'Teste 3',
      },
    ]);
  });

  it('should map grid text section without data', () => {
    const data = mapTextGrid();

    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map grid image section without data', () => {
    const data = mapImageGrid();

    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map grid image section with data', () => {
    const data = mapImageGrid(imageGridData);

    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('gallery');
    expect(data.description).toBe(
      'Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde.',
    );
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('gallery');
    expect(data.grid[0].altText).toBe('Homem com com os braços cruzados');
    expect(data.grid[0].srcImg).toBe('image.jpg');
  });

  it('should map grid image without image infos', () => {
    const data = mapImageGrid(imageGridDataWoUrlAndAltText);

    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('gallery');
    expect(data.description).toBe(
      'Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde.',
    );
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('gallery');
    expect(data.grid[0].altText).toBe('');
    expect(data.grid[0].srcImg).toBe('');
  });

  it('should map grid image without images', () => {
    const data = mapImageGrid(imageGridDataWithoutImages);

    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('gallery');
    expect(data.description).toBe(
      'Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde.',
    );
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('gallery');
    expect(data.grid[0]).toEqual({ altText: '', srcImg: '' });
  });
});
