import tw, { styled } from 'twin.macro';
import { Bg1, LT_BG } from '../../../constants/images';

export const Spa = () => {
  return (
    <div>
      <Backgrounds>
        <img src={Bg1} className='main-background' />
        <img src={LT_BG} className='left-top-background' />
      </Backgrounds>
    </div>
  );
};

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
