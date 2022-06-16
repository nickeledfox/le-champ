import { Link } from 'react-router-dom';
import tw, { styled } from 'twin.macro';

import { Coppyright } from './Coppyright';
import { H } from './Heading';
import Phone from './Phone';
import {
  FooterBackgroundImage as BackgroundImage,
  FacebookIcon,
  InstagramIcon,
  LogoWhite,
} from '../constants/images';
import { FlexCenter } from '../styles/GlobalStyles';

const FooterWrapper = styled.footer`
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

const Col = tw.div`
     pb-14 
     flex 
     flex-col 
     items-center
     z-10
`;

const FooterContainer = tw.div`
     pt-9 
     lg:flex 
     lg:flex-row
     lg:justify-between
     lg:w-[1100px]
     mx-auto
`;

const Topic = tw(H)`
     pb-10
`;

const IconLink = tw(Link)`
     pb-32
     lg:pb-8
     lg:mt-[-15px]
     z-10

     [> img]:(w-[ 24.2px] h-[24px])
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FlexCenter>
        <img src={LogoWhite} alt='' className='z-10' />
      </FlexCenter>
      <FooterContainer>
        <Col>
          <Topic level={4}>VỀ LE CHAMP</Topic>
          <Link to='/'>Khu Nghỉ Dưỡng</Link>
          <Link to='/'>Ẩm Thực</Link>
          <Link to='/'>Khoáng Nóng</Link>
          <Link to='/'>Tin Tức</Link>
        </Col>
        <Col className='lg:pl-[60px]'>
          <Topic level={4}>LIÊN HỆ</Topic>
          <Link className='pb-9' to='/'>
            bản nước nóng, tú lệ, văn chấn, yên bái, việt nam
          </Link>
          <Topic level={4}>ĐẶT PHÒNG</Topic>
          <div className='mt-[-20px]'>
            <Phone />
          </div>
        </Col>
        <Col>
          <Topic level={4}>THÔNG TIN KHÁC</Topic>
          <Link to='/'>Thư viện ảnh</Link>
          <Link to='/'>Câu hỏi thường gặp</Link>
          <Link to='/'>Chính sách thanh toán</Link>
          <Link to='/'>Điều khoản dịch vụ</Link>
        </Col>
      </FooterContainer>
      <FlexCenter>
        <IconLink to={''}>
          <img src={FacebookIcon} alt='' />
        </IconLink>
        <IconLink to={''}>
          <img src={InstagramIcon} alt='' className='ml-[9.2px]' />
        </IconLink>
      </FlexCenter>
      <Coppyright />
    </FooterWrapper>
  );
};
