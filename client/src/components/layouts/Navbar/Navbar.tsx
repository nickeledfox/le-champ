import { Container } from '../../../styles/GlobalStyles';
import { burgerStyles, Navigation, NavLink, NavLinks } from './style';

import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../../../constants/breakpoints';
import { stack as BurgerMenu } from 'react-burger-menu';

interface NavbarProps {
  pageWrapId?: string;
  outerContainerId?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });

  return (
    <Navigation>
      {isTablet ? (
        <BurgerMenu
          right
          styles={burgerStyles}
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        >
          <NavLink to={''}>Link</NavLink>
          <NavLink to={''}>Link</NavLink>
          <NavLink to={''}>Link</NavLink>
          <NavLink to={''}>Link</NavLink>
          <NavLink to={''}>Link</NavLink>
          <NavLink to={''}>Link</NavLink>
        </BurgerMenu>
      ) : (
        <Container>
          <NavLinks>
            <NavLink to={''}>Link</NavLink>
            <NavLink to={''}>Link</NavLink>
            <NavLink to={''}>Link</NavLink>
            <NavLink to={''}>Link</NavLink>
            <NavLink to={''}>Link</NavLink>
            <NavLink to={''}>Link</NavLink>
          </NavLinks>
        </Container>
      )}
    </Navigation>
  );
};
