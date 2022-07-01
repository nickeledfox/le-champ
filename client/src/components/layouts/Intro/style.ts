import tw, { styled } from 'twin.macro';

export const BgWrapper = tw.figure`
[> img]:(
  absolute
  top-[290px] left-0 right-0
  md:top-[580px]
  lg:top-[85vh]
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
        top-[21rem] sm:top-[25rem] md:top-[55rem] lg:top-[450px] xl:top-[550px]
    `}
`;

export const PetalsImgWrapper = tw.figure`
  hidden lg:inline-block

  absolute 
  left-0
  top-[90rem]
`;

export const Content = tw.div`
 mt-[-15rem] md:mt-12
 lg:mt-[10rem]
 px-[10px] sm:px-[20px]
 z-10 
 relative
 text-center 
 flex flex-col justify-center items-center
`;

export const Details = tw.p`
 mt-5 sm:mt-[25px] 
 mb-[36px]
 text-[14px] sm:text-[20px]
 leading-8 sm:leading-[30px]
 tracking-wider
 md:w-[560px]
 max-w-[740px]
`;
