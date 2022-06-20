import { Container } from '../../../styles/GlobalStyles';
import { Navigation, NavLink, NavLinks } from './style';

export const Navbar = () => {
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
