import tw, { styled, css } from 'twin.macro';
import { Hero } from '../components/common/Hero';
import { Spa } from '../containers';

import { BackgroundImage } from '../constants/images';

export const Home = () => {
  return (
    <>
      <Hero className='w-full h-full' background={BackgroundImage} />
      <main>{/* <Spa /> */}</main>
    </>
  );
};
