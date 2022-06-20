import { Link } from 'react-router-dom';

import { Coppyright } from '../Coppyright/Coppyright';
import Phone from '../../common/Phone';
import {
  FacebookIcon,
  InstagramIcon,
  LogoWhite,
} from '../../../constants/images';
import { FlexCenter } from '../../../styles/GlobalStyles';
import { Col, FooterContainer, FooterWrapper, IconLink, Topic } from './style';

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
            Bản nước nóng, tú lệ, văn chấn, yên bái, việt nam
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
      <FlexCenter className='pl-7'>
        <IconLink to={'https://www.facebook.com'}>
          <img src={FacebookIcon} alt='facebook' />
        </IconLink>
        <IconLink to={'https://www.instagram.com'}>
          <img src={InstagramIcon} alt='instagram' className='ml-[9.2px]' />
        </IconLink>
      </FlexCenter>
      <Coppyright />
    </FooterWrapper>
  );
};
