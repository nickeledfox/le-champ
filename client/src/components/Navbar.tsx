import { Link } from 'react-router-dom';
import tw, { styled, css } from 'twin.macro';
import { Container } from '../styles/GlobalStyles';

const Navigation = styled.nav`
  background: var(--gradient);
  font-size: 16px;
  line-height: 20px;
`;

const NavLinks = tw.div`
  flex 
  justify-between
`;

const NavLink = tw(Link)`
  py-6
  text-white
  font-bold
`;

const Navbar = () => {
  return (
    <Navigation>
      <Container className='lg:px-20'>
        <NavLinks>
          <NavLink to={''}>Link</NavLink>
          <NavLink to={''}>Link</NavLink>
          <NavLink to={''}>Link</NavLink>
          <NavLink to={''}>Link</NavLink>
          <NavLink to={''}>Link</NavLink>
          <NavLink to={''}>Link</NavLink>
        </NavLinks>
      </Container>
    </Navigation>
  );
};

export default Navbar;
