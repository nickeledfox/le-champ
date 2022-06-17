import tw, { styled, css } from 'twin.macro';

import { Button } from '../components/Button';
import { H } from '../components/Heading';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import { Bg1, LT_BG } from '../constants/images';

const Backgrounds = styled.section`
  .main-background {
    width: 100vw;
    position: absolute;
    top: 629px;
  }

  .left-top-background {
    max-width: 530.36px;
    max-height: 497.6px;
    position: absolute;
    top: 540px;
    left: 0;
  }
`;

export const Home = () => {
  return (
    <div>
      <Hero />
      <Backgrounds>
        <img src={Bg1} className='main-background' />
        <img src={LT_BG} className='left-top-background' />
      </Backgrounds>
      <SearchBar />
    </div>
  );
};
