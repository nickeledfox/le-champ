import { Link } from 'react-router-dom';
import tw, { styled } from 'twin.macro';

export const InfoHeader = styled.header`
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

  ${tw`
      font-medium
      text-[8px] md:text-[14px]
      leading-[10px] md:leading-[18px]
      bg-white

      fixed top-0 z-40 w-full
      md:relative
      md:shadow-none
  `}
`;

export const InfoItems = tw.ul`
  flex 
  justify-between
  items-center
`;

export const InfoItem = styled.li`
  ${tw`
    flex 
    items-center
`}
`;

export const Icon = styled.div`
  padding-right: 12px;
`;

export const LogoWrapper = styled(Link)`
  ${tw`
      mt-[6.5px] md:mt-[8px] 
      mb-[10.36px] md:mb-5

      w-[46.3px] h-[31.38px]
      md:w-[80px] md:h-[49px]
  `}
`;
