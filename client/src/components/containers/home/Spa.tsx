import tw, { styled } from 'twin.macro';
import { Bg1, LT_BG } from '../../../constants/images';
import { SearchBar } from '../../layouts';

export const Spa = () => {
  return (
    <div>
      <Backgrounds>
        <img src={Bg1} className='main-background' alt='' />
        <img src={LT_BG} className='left-top-background' alt='' />
      </Backgrounds>
      <SearchBar variant='horizontal' />
    </div>
  );
};

const Backgrounds = styled.section`
  .main-background {
    max-width: 100%;
    width: 100vw;

    ${tw`
        absolute
        top-[290px]
        md:top-[580px]
        lg:top-[710px]
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
        top-[706.04px] lg:top-[600px]
    `}
  }
`;
