import { mapSectionContent, mapSectionTwoColumns } from './map-sections';
import { sectionContentData } from './mocks/sectionContentData';
import { sectionTwoColumnsData } from './mocks/sectionTwoColumnsData';

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
});
