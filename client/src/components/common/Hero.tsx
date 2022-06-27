import tw, { styled } from 'twin.macro';

interface HeroProps {
  className?: string;
  background?: any;
}

export const Hero = ({ background }: HeroProps) => {
  return <HeroWrapper background={background}></HeroWrapper>;
};

const HeroWrapper = styled.div<{ background: any }>`
  background: url(${(props) => props.background});
  width: 100%;
  height: 75vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: -1px;
`;
