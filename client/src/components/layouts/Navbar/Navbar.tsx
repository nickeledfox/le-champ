import routes from '../../../routes/routesData';

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

  const navItems = (
    <NavLinks>
      {routes.map((route, index) => (
        <NavLink to={route.path} key={`${route.name} ${index}`}>
          {route.name}
        </NavLink>
      ))}
      <select name='' id='' className='bg-transparent text-white'>
        <option value='en'>En</option>
        <option value='vn'>Vn</option>
      </select>
    </NavLinks>
  );

  return (
    <Navigation>
      {isTablet ? (
        <BurgerMenu
          right
          styles={burgerStyles}
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        >
          {navItems}
        </BurgerMenu>
      ) : (
        <Container className='!px-[40px]'>{navItems}</Container>
      )}
    </Navigation>
  );
};
