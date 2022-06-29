import { styled } from 'twin.macro';
import { ImageProps } from '../../types/typing';



export const Image = ({ src, width }: ImageProps) => {
  return <StyledImage alt='' src={src} width={width} />;
};

const StyledImage = styled.img`
  width: ${(props) => (props.width ? props.width : 'auto')};
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;
