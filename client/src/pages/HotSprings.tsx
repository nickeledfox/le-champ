import { Hero } from '../components/common/Hero';
import { Intro } from '../components/layouts';
import { HotSpringsBg } from '../constants/images';

export const HotSprings = () => {
  return (
    <>
      <Hero src={HotSpringsBg} />
      <main>
        <Intro
          title='HOT MINERAL'
          color={'accent'}
          titleLevel={2}
          details='Growing up by the hot stream nestled around the valley, Thai people have kept the naked bathing custom for hundreds of years. Originating from the ground, hot mineral spring absorbs the quintessence of the legendary land and promises the “spirit water” containing secrets of the Thai women’s beauty.

        Visiting Tu Le, visitors can experience the natural hot mineral spring right on Le Champ’s premises with both outdoor pools and private bathrooms to enrich health, eliminate fatigue, and enjoy moments of relaxation.'
        />
      </main>
    </>
  );
};
