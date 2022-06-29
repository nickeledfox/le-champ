import tw, { styled } from 'twin.macro';

import { Bg1, PeachBlossom } from '../constants/images';
import { deviceSize } from '../constants/breakpoints';
import { useMediaQuery } from 'react-responsive';

import { SearchBar } from '../components/layouts';


export const Spa = () => {
  const isLaptop = useMediaQuery({ minWidth: deviceSize.laptop });

  return (
    <section>
      <Backgrounds>
        <img src={Bg1} className='main-background' alt='' />
        <img src={PeachBlossom} className='left-top-background' alt='' />
      </Backgrounds>


      {isLaptop ? (
        <SearchBar variant='horizontal' />
      ) : (
        <SearchBar variant='vertical' />
      )}
    </section>
  );
};

const Backgrounds = styled.figure`
  .main-background {
    max-width: 100%;
    width: 100vw;

    ${tw`
        absolute
        top-[290px]
        md:top-[580px]
        lg:top-[80vh]
    `}
  }

  .left-top-background {
    max-width: 100%;
    max-width: 530.36px;
    max-height: 497.6px;
    filter: drop-shadow(10px 20px 20px rgba(0, 0, 0, 0.1));

    ${tw`
        absolute
        w-[196.13px] md:w-[300px] lg:w-full lg:h-full
        left-[-7.65px] md:left-0
        top-[706.04px] lg:top-[550px]
    `}
  }
`;
