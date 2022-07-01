import { H } from '../components/common/Heading';
import { Hero } from '../components/common/Hero';
import { GalleryBg } from '../constants/images';
import { Container } from '../styles/GlobalStyles';

export const Gallery = () => {
  return (
    <>
      <Hero src={GalleryBg} />
      <main>
        <Container>
          <H center color='secondary' level={4}>
            Gallery
          </H>
        </Container>
      </main>
    </>
  );
};
