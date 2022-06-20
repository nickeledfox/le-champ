import tw, { styled, css } from 'twin.macro';

export interface Props {
  variant: 'vertical' | 'horizontal';
  className?: string;
}

export const SearchBarComponent = styled.div(({ variant }: Props) => [
  tw`
    bg-[rgba(231, 169, 37, 0.97)]
    relative
    z-10
    mx-auto
              
    [svg]:(cursor-pointer)
  `,
  css`
    border-radius: var(--border-radius);

    .fa-plus {
      padding: 0 15px;
    }
  `,

  variant === 'vertical' && [
    css`
      .SearchItem :nth-child(2):not(svg) {
        border-radius: var(--border-radius);
        ${tw`
              py-[12px] px-[14px]
              text-gray
              font-medium
              mt-[1rem]
              bg-white
          `}
      }

      svg {
        ${tw`
              text-[25px]
          `}
      }

      span {
        ${tw`
              flex justify-between
          `}
      }

      .ButtonWrapper {
        ${tw`
              flex items-center justify-center
          `}
      }

      button {
        margin-top: 35px;
        width: 65%;
        padding: 18px;
      }
    `,

    tw`
        flex flex-col
        justify-evenly
        gap-[20px]
        px-[35px] pt-[27px] pb-[46.5px]
        max-w-[380px]
      `,
  ],

  variant === 'horizontal' && [
    css`
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-columns: 1.2fr 1.2fr 1fr 1fr 1.5fr;
      grid-gap: 30px;

      .SearchItem {
        border-bottom: 1px solid #fff;
        ${tw`
              flex flex-col justify-between
          `}
      }

      .SearchItem :nth-child(2) {
        ${tw`
              text-white
          `}
      }

      svg {
        ${tw`
              text-[17px]
          `}
      }

      span {
        ${tw`
              flex justify-between items-center
              pb-[5px]
          `}
      }

      .ButtonWrapper {
        ${tw`
              flex items-center justify-end
          `}
      }
    `,
    tw`
        font-medium
        text-[14px]
        leading-[20px]

        md:mt-[-190px]
        md:max-w-[950px]
        md:px-[25px]
        md:py-[25px]
      
        lg:mt-[-40px]
        lg:px-[41.5px]
        lg:py-[25.5px]
      `,
  ],
]);

export const OptionName = tw.label`
  text-[12px] lg:text-[14px]
  font-bold
  leading-[13px]
  lg:leading-[20px]
  pb-[9px]
`;
