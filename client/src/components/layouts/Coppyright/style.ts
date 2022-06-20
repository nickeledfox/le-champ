import tw, { styled } from 'twin.macro';

export const CoppyrightContainer = tw.div`
w-full
bg-[var(--black2)]
flex items-center justify-center
relative

[> a]:(pt-5 pb-7)
`;

export const Text = tw.span`
text-white
text-2xl
ml-32


`;

export const ImageContainer = styled.div`
  > img {
    max-width: 10.791rem;
    max-height: 3.298rem;
  }

  ${tw`
    hidden
    sm:block
    w-auto
    h-full
    ml-32
`};
`;
