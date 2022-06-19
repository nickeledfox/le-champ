import tw, { styled, css } from 'twin.macro';

export const BaseTitle = tw.span`
  font-medium
  block 
  m-0
`;

interface HProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  accent?: boolean;
  center?: boolean;
  text?: string;
  as?: string;
}

export const H = styled(BaseTitle)(({ level }: HProps) => [
  tw`
  font-diavolo
  text-brown
  `,
  css`
    > span {
      color: var(--accent);
    }
    font-weight: 700;
    text-transform: capitalize;
  `,

  level === 1 && [
    `
    font-size: 60px;
    line-height: 60px;
    text-transform: uppercase;
  `,
  ],

  level === 2 && [
    css`
      > span {
        color: var(--c-font);
        text-transform: capitalize;
        font-weight: 500;
      }
    `,
    `
    font-size: 50px;
    line-height: 50px;
  `,
  ],

  level === 3 && [
    `
    font-size: 40px;
    line-height: 40px;
  `,
  ],

  level === 4 && [
    `
    font-size: 25px;
    line-height: 25px;
    color: inherit;

  `,
  ],

  level === 5 && [
    `
  font-size: 20px;
  line-height: 20px;
  font-family: 'Google Sans'
  `,
  ],

  level === 6 && [
    `
  font-size: 16px;
  line-height: 124.5%;
  font-family: 'Google Sans'
  `,
  ],
]);
