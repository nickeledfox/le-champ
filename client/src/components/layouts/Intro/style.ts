import tw, { styled } from 'twin.macro';

export const BgWrapper = tw.figure`
[> img]:(
  absolute
  top-[290px]
  md:top-[580px]
  lg:top-[80vh]
)
`;

export const PeachBlossomWrapper = styled.figure`
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
`;

export const Content = tw.div`
 relative
 pt-[12rem]
 z-10 
 text-center 
 flex flex-col justify-center items-center
`;

export const Details = tw.p`
 my-[25px]
 text-[20px]
 leading-[30px]
 w-[560px]
 max-w-[740px]
 tracking-wider
`;
