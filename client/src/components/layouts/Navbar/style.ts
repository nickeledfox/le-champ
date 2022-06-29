import { Link } from 'react-router-dom';
import tw, { styled } from 'twin.macro';

export const Navigation = styled.nav`
  ${tw`
      text-[16px]
      leading-[20px]
`}
  background: var(--gradient);
`;

export const NavLinks = tw.div`
  flex
  justify-between
  lg:px-20
`;

export const NavLink = styled(Link)`
  ${tw`
      py-6 md:py-[23px]
      text-white
      font-bold
      relative
`}
  ::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 3.06px;
    bottom: 1px;
    left: 0;
    background-color: #fff;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  :hover::before {
    transform: scaleX(1);
  }
`;

// react-burger-menu styles
export const burgerStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '25px',
    height: '20px',
    right: '28px',
    top: '15px',
  },
  bmBurgerBars: {
    background: 'var(--brown)',
    height: '2px',
  },
  bmCrossButton: {
    display: 'none',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background:
      'linear-gradient(136.07deg, var(--accent) 0%, var(--blue) 99.35%)',
    padding: '40px 1.5em 0',
  },
  bmItemList: {
    color: '#fff',
    padding: '0.8em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.8)',
  },
};
