import { Logo } from '../../../constants/images';

import { ReactComponent as LocationIcon } from '../../../assets/images/icons/location.svg';
import { ReactComponent as MailIcon } from '../../../assets/images/icons/mail.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/images/icons/phone.svg';

import { Container } from '../../../styles/GlobalStyles';
import Phone from '../../common/Phone';
import { Button } from '../../common/Button';
import { Icon, InfoHeader, InfoItem, InfoItems, LogoWrapper } from './style';
import { Navbar } from '../Navbar/Navbar';

export const Header = () => {
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
              <img src={Logo} alt='logo' />
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
