import tw, { styled, css } from 'twin.macro';
import { Hero } from '../components/common/Hero';

import { BackgroundImage, LeChamp } from '../constants/images';
import { Intro } from '../components/layouts';
import { SearchBar } from '../components/layouts';
import { deviceSize } from '../constants/breakpoints';
import { useMediaQuery } from 'react-responsive';

export const Home = () => {
  const isLaptop = useMediaQuery({ minWidth: deviceSize.laptop });
  return (
    <>
      <Hero src={BackgroundImage} />
      {isLaptop ? (
        <SearchBar variant='horizontal' />
      ) : (
        <SearchBar variant='vertical' />
      )}
      <main>
        <Intro
          subtitle='Le Champ Tu Le Resort Hot Spring & Spa'
          image={LeChamp}
          details='Le Champ Tu Le Resort Hot Spring & Spa is located on a gentle hill with the system of 96 rooms with bold local cultural identity, exquisite sophistication and standardized interiors, bringing guests the ultimate experience of residing in a classy resort right in the middle of the Northwest mountains.'
        />
      </main>
    </>
  );
};
