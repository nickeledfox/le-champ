import { styled } from 'twin.macro';
import { ImageProps } from '../../types/typing';

export const Hero = ({ src }: ImageProps) => {
  return <HeroWrapper Imgurl={src}></HeroWrapper>;
};

const HeroWrapper = styled.div<{ Imgurl: string | undefined }>`
  background: url(${(props) => props.Imgurl});
  width: 100%;
  height: 70vh;
  max-height: 628px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: -1px;
`;
