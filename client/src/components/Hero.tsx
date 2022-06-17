import tw, { styled, css } from 'twin.macro';
import { BackgroundImage } from '../constants/images';

const HeroWrapper = styled.div`
  height: 629px;
  margin-top: -1px;
  background: url(${BackgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Hero = () => {
  return <HeroWrapper></HeroWrapper>;
};

export default Hero;
