import tw, { styled, css } from 'twin.macro';
import { Hero } from '../components/common/Hero';

import { BackgroundImage, LeChamp, Particle } from '../constants/images';
import { Intro } from '../components/layouts';
import { SearchBar } from '../components/layouts';
import { deviceSize } from '../constants/breakpoints';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation(['pages']);
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
          image={LeChamp}
          subtitle={t('home.intro.subtitle')}
          details={t('home.intro.description')}
        />
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.main`
  background-image: url(${Particle});
  background-repeat: repeat;
`;
