import { Link } from 'react-router-dom';
import links from '../data/FooterLinks.json';

import tw, { styled, css } from 'twin.macro';

import { Coppyright } from './Coppyright';
import { H } from './Heading';
import { Container } from '../styles/GlobalStyles';
import Phone from './Phone';

const FooterWrapper = styled.footer`
  background: rgba(63, 41, 17, 0.9);
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
`;

const FooterContainer = tw(Container)`
     pt-9 
     lg:flex 
     lg:flex-row
     lg:justify-between
`;

const Topic = tw(H)`
     py-4
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        {links.map((item) => (
          <Col key={item.title}>
            <Topic level={4}>{item.title}</Topic>
            {item.links.map((link) => (
              <Link to={link.path} key={link.name}>
                {link.name}
              </Link>
            ))}
          </Col>
        ))}
        <Col>
          <Topic level={4}>LIÊN HỆ</Topic>
          <Link className='pb-8' to='/'>
            bản nước nóng, tú lệ, văn chấn, yên bái, việt nam
          </Link>
          <Topic level={4}>ĐẶT PHÒNG</Topic>
          <Phone />
        </Col>
      </FooterContainer>
      <Coppyright />
    </FooterWrapper>
  );
};
