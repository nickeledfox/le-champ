import tw, { styled, css } from 'twin.macro';
import { BackgroundImage } from '../../../constants/images';

const HeroWrapper = styled.div`
  margin-top: -1px;
  background: url(${BackgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  ${tw`
      h-[310px]
      md:h-[629px]
  `}
`;

export const Hero = () => {
  return <HeroWrapper></HeroWrapper>;
};
