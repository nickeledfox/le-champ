import { Link } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import { CopyrightImg } from '../constants/images';

const CoppyrightContainer = tw.div`
w-full
bg-[var(--black2)]
flex items-center justify-center

[> a]:(pt-5 pb-7)
`;

const Text = tw.span`
text-white
text-2xl
`;

const ImageContainer = styled.div`
  > img {
    max-width: 10.791rem;
    max-height: 3.298rem;
  }

  ${tw`
    hidden
    sm:block
    w-auto
    h-full
    pr-32
`};
`;

export const Coppyright = () => {
  return (
    <CoppyrightContainer>
      <ImageContainer>
        <img src={CopyrightImg} alt='' />
      </ImageContainer>
      <Link to='#'>
        <Text>Coppyright 2022 - Le Champ Resort</Text>
      </Link>
    </CoppyrightContainer>
  );
};
