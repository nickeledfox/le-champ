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
      <Container className='!px-[40px]'>
        <InfoItems>
          <InfoItem className='capitalize'>
            <Icon>
              <LocationIcon />
            </Icon>
            <address className='max-w-[190px]'>
              <a href='geo:38.62464092991612,-90.18476128578186'>
                Nuoc Nong Community, Tu Le Village, Van Chan Town, Yen Bai
                Province
              </a>
            </address>
          </InfoItem>
          <InfoItem>
            <Icon>
              <MailIcon />
            </Icon>
            <address>
              <a href='mailto:info@lecham.vn'>info@lecham.vn</a>
            </address>
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
              Book now
            </Button>
          </InfoItem>
        </InfoItems>
      </Container>
      <Navbar />
    </InfoHeader>
  );
};
