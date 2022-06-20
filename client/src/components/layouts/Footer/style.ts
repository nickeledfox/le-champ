import { Link } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import { BackgroundImage } from '../../../constants/images';
import { H } from '../../common/Heading';

export const FooterWrapper = styled.footer`
  margin-top: 100vh;

  background: url(${BackgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  :before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(63, 41, 17, 0.9);
  }

  font-size: 1.4rem;
  line-height: 3.5rem;

  ${tw`
    w-full
    h-auto
    text-white
    font-medium
    text-center
`}
`;

export const Col = tw.div`
     pb-14 
     flex 
     flex-col 
     items-center
     z-10
`;

export const FooterContainer = tw.div`
     pt-9 
     lg:flex 
     lg:flex-row
     lg:justify-between
     lg:w-[1100px]
     mx-auto
`;

export const Topic = tw(H)`
     pb-10
`;

export const IconLink = tw(Link)`
     pb-32
     lg:pb-8
     lg:mt-[-15px]
     z-10

     [> img]:(w-[ 24.2px] h-[24px])
`;
