import { Hero } from '../components/common/Hero';
import { Intro } from '../components/layouts';
import { BackgroundImage } from '../constants/images';

export const Story = () => {
  return (
    <>
      <Hero src={BackgroundImage} />
      <main>
        <Intro
          title='LE CHAMP TU LE'
          color={'primary'}
          titleLevel={2}
          subtitle='Tu Le Resort Hot Spring & Spa'
          details='Your discovery journey will be opened with the harmony of heaven and earth, trees, rivers and streams, and the gentle and hospitable Tu Le people. Take a look and feel the surrounding, let your soul touch the beauty of this fairy-tale place!'
        />
      </main>
    </>
  );
};
