import tw, { styled, css } from 'twin.macro';

interface ButtonProps {
  variant?: 'primary' | 'white' | 'disabled';
}

export const Button = styled.button(({ variant }: ButtonProps) => [
  tw`
  transition font-medium py-[11px] px-[32px]
  `,
  css`
    box-shadow: 0px 20px 35px rgba(241, 165, 1, 0.15);
    font-size: 1.6rem;
  `,

  variant === 'primary' && [
    css`
      border-radius: 21px;
      line-height: 20px;
    `,
    tw`
    text-white
    bg-accent 
    border-accent
    hover:bg-brown active:bg-brown`,
  ],

  variant === 'white' && [
    css`
      border-radius: var(--border-radius);
      box-shadow: 0px 20px 35px rgba(241, 165, 1, 0.15);
      font-size: 20px;
      line-height: 25px;
    `,
    tw`
    w-[146.03px] h-[50px]
    text-brown
    bg-white 
    border-white
    hover:opacity-[.85] hover:text-black
    active:opacity-[.75]
    `,
  ],

  variant === 'disabled' && [
    css`
      border-radius: var(--border-radius);
      font-size: 20px;
      line-height: 25px;
    `,
    tw`
    text-ligth
    bg-white 
    border-white
    cursor-not-allowed`,
  ],
]);
