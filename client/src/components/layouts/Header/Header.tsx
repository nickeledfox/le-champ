import { Logo } from '../../../constants/images';

import { ReactComponent as LocationIcon } from '../../../assets/images/icons/location.svg';
import { ReactComponent as MailIcon } from '../../../assets/images/icons/mail.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/images/icons/phone.svg';

import { Container } from '../../../styles/GlobalStyles';
import Phone from '../../common/Phone';
import { Button } from '../../common/Button';
import { Icon, InfoHeader, InfoItem, InfoItems, LogoWrapper } from './style';
import { Navbar } from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <InfoHeader>
      <Container>
        <InfoItems>
          <InfoItem className='capitalize'>
            <Icon>
              <LocationIcon />
            </Icon>
            <Link to={'geo:38.62464092991612,-90.18476128578186'}>
              bản nước nóng, tú lệ, <br /> văn chấn, yên bái, việt nam
            </Link>
          </InfoItem>
          <InfoItem>
            <Icon>
              <MailIcon />
            </Icon>
            info@lecham.vn
          </InfoItem>
          <InfoItem className='-order-1 lg:order-none'>
            <LogoWrapper to={'/'}>
              <img src={Logo} alt='logo' />
            </LogoWrapper>
          </InfoItem>
          <InfoItem>
            <Icon>
              <PhoneIcon className='hidden lg:inline-block' />
            </Icon>
            <Phone className='hidden lg:inline-block' />
          </InfoItem>
          <InfoItem>
            <Button
              variant='primary'
              className='!text-[20px] hidden md:inline-flex'
            >
              Đặt phòng
            </Button>
          </InfoItem>
        </InfoItems>
      </Container>
      <Navbar />
    </InfoHeader>
  );
};
