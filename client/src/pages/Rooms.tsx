import { Hero } from '../components/common/Hero';
import { Intro } from '../components/layouts';
import { BackgroundImage } from '../constants/images';

export const Rooms = () => {
  return (
    <>
      <Hero src={BackgroundImage} />
      <main>
        <Intro
          title='ROOMS & SUITES'
          color={'primary'}
          titleLevel={2}
          details='Le Champ Tu Le Resort Hot Spring & Spa is located on a gentle hill with a system of 96 rooms with bold local cultural identity, exquisite sophistication, and standardized interiors, bringing guests the ultimate experience of residing in a classy resort right in the middle of the Northwest mountains.'
        />
      </main>
    </>
  );
};
