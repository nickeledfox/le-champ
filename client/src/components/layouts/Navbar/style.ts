import { Link } from 'react-router-dom';
import tw, { styled } from 'twin.macro';

export const Navigation = styled.nav`
  background: var(--gradient);
  font-size: 16px;
  line-height: 20px;
`;

export const NavLinks = tw.div`
  flex 
  justify-between
`;

export const NavLink = tw(Link)`
  py-6
  text-white
  font-bold
`;
