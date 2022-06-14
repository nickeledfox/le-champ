import { Global, css } from '@emotion/react';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';
import './index.css';

const defaults = css`
  * {
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

const customStyles = css(defaults, {
  body: {
    fontFamily: theme`fontFamily.base`,
    fontSize: '2rem',
    ...tw`antialiased`,

    backgroundColor: 'var(--bg)',
    color: 'var(--c-font)',

    overflowX: 'hidden',
    scrollBehavior: 'smooth',
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
