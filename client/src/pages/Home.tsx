import tw, { styled, css } from 'twin.macro';
import { Hero } from '../components/common/Hero';

import { BackgroundImage, LeChamp, Particle } from '../constants/images';
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
        <div className='mt-[-350px] mb-96 sm:mb-20 md:mb-40'>
          <SearchBar variant='vertical' />
        </div>
      )}
      <MainWrapper>
        <Intro
          subtitle='Le Champ Tu Le Resort Hot Spring & Spa'
          image={LeChamp}
          details='Le Champ Tu Le Resort Hot Spring & Spa is located on a gentle hill with the system of 96 rooms with bold local cultural identity, exquisite sophistication and standardized interiors, bringing guests the ultimate experience of residing in a classy resort right in the middle of the Northwest mountains.'
        />
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.main`
  background-image: url(${Particle});
  background-repeat: repeat;
`;
