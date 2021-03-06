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
    fontWeight: 400,
    ...tw`antialiased`,
    // backgroundColor: 'var(--bg-3)',
    color: 'var(--c-font)',
    overflowX: 'hidden',
    scrollBehavior: 'smooth',
  },
});

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export const Wrapper = tw.div`
relative
mx-auto
max-w-[2000px]
`;

export const Container = tw.div`
mx-auto
px-[16px]
max-w-[1280px]
`;

export const FlexCenter = tw.div`
flex justify-center
`;
