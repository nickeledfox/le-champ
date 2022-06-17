import tw, { styled, css } from 'twin.macro';
import { Logo } from '../constants/images';
import { ReactComponent as PhoneIcon } from '../assets/images/icons/phone.svg';
import { ReactComponent as LocationIcon } from '../assets/images/icons/location.svg';
import { ReactComponent as MailIcon } from '../assets/images/icons/mail.svg';

import { Container } from '../styles/GlobalStyles';
import Phone from './Phone';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import Navbar from './Navbar';

const InfoHeader = styled.header`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  background-color: #fff;
`;

const InfoItems = tw.ul`
  flex 
  justify-between
  items-center
`;
const InfoItem = tw.li`
  flex 
  items-center
`;

const Icon = styled.div`
  padding-right: 12px;
`;

const LogoWrapper = styled(Link)`
  padding-top: 12px;
  padding-bottom: 6px;
`;

const Header = () => {
  return (
    <InfoHeader>
      <Container>
        <InfoItems>
          <InfoItem className='capitalize'>
            <Icon>
              <LocationIcon />
            </Icon>
            bản nước nóng, tú lệ, <br /> văn chấn, yên bái, việt nam
          </InfoItem>
          <InfoItem>
            <Icon>
              <MailIcon />
            </Icon>
            info@lecham.vn
          </InfoItem>
          <InfoItem>
            <LogoWrapper to={'/'}>
              <img src={Logo} alt='' />
            </LogoWrapper>
          </InfoItem>
          <InfoItem>
            <Icon>
              <PhoneIcon />
            </Icon>
            <Phone />
          </InfoItem>
          <InfoItem>
            <Button variant='primary' style={{ fontSize: '20px' }}>
              Đặt phòng
            </Button>
          </InfoItem>
          {/* <InfoItem>Hamburger</InfoItem> */}
        </InfoItems>
      </Container>
      <Navbar />
    </InfoHeader>
  );
};

export default Header;
