import tw, { styled, css } from 'twin.macro';
import { Container } from '../styles/GlobalStyles';
import { Button } from './common/Button';

// TODO: Create room searching

interface SearchBarComponentProps {
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
  `,
    css`
      border-radius: var(--border-radius);
    `,

    variant === 'vertical' && [
      css`
        .SearchItem :nth-child(2) {
          color: #6a6a6a;
          background: #fff;
          font-weight: 500;
          padding: 11.5px 13.5px;
          margin-top: 10px;
          border-radius: var(--border-radius);
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

    variant === 'horizontal' && [
      css`
        .SearchItem :nth-child(2) {
          color: #fff;
        }
      `,
      tw`
        flex
        justify-between
      
        h-[110px] // TODO: remove when items set
        lg:mt-[-60px]
        lg:max-w-[950px]
        lg:px-[41.5px]
        lg:py-[22.5px]
    `,
    ],
  ]
);

const OptionName = tw.span`
  text-[12px] sm:text-[14px]
  font-bold
  leading-[20px]
`;

export const SearchBar: React.FC<SearchBarComponentProps> = ({ variant }) => {
  return (
    <Container>
      <SearchBarComponent variant={variant}>
        <div className='SearchItem'>
          <OptionName>Ngày đến:</OptionName>
          <div>Date</div>
        </div>
        <div className='SearchItem'>
          <OptionName>Ngày về:</OptionName>
          <div>Date</div>
        </div>
        <div className='SearchItem'>
          <OptionName>Người lớn:</OptionName>
          <div>Adults</div>
        </div>
        <div className='SearchItem'>
          <OptionName>Trẻ em dưới 5 tuổi:</OptionName>
          <div>Children</div>
        </div>
        <div className='SearchItem flex items-center justify-center'>
          <Button variant='white'>Tìm phòng</Button>
        </div>
      </SearchBarComponent>
    </Container>
  );
};
