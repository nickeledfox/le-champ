import tw, { styled, css } from 'twin.macro';

export interface SearchBarComponentProps {
  variant: 'vertical' | 'horizontal';
  className?: string;
}

export const SearchBarComponent = styled.div(
  ({ variant }: SearchBarComponentProps) => [
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

    /***************************************
=========== Vertical Styles ============
****************************************/

    variant === 'vertical' && [
      css`
        .SearchItem :nth-child(2):not(svg) {
          border-radius: var(--border-radius);

          ${tw`
              py-[12px] px-[14px]
              flex items-center justify-end
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
              absolute
              left-20
          `}
        }

        button {
          margin-top: 35px;
          width: 65%;
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

    /***************************************
=========== Horizontal Styles ============
****************************************/

    variant === 'horizontal' && [
      css`
        .SearchItem {
          border-bottom: 1px solid #fff;
          display: flex;
          flex-direction: column;
        }

        .SearchItem :nth-child(2) {
          color: #fff;
          padding-top: 8px;
        }

        div {
          padding-bottom: 3px;
        }

        svg {
          ${tw`
              text-[17px]
          `}
        }

        span {
          ${tw`
              pr-20
          `}
        }
      `,
      tw`
        flex
        justify-between
        text-[14px]
        font-medium
        leading-[20px]
      
        lg:mt-[-40px]
        lg:max-w-[950px]
        lg:px-[41.5px]
        lg:py-[22.5px]
      `,
    ],
  ]
);

export const OptionName = tw.label`
  text-[12px] sm:text-[14px]
  font-bold
  leading-[20px]
`;
