import tw, { styled, css } from 'twin.macro';
import { Container } from '../../../styles/GlobalStyles';
import { Button } from '../../common/Button';

const SearchBarComponent = styled.div`
  border-radius: var(--border-radius);

  ${tw`
  relative
  bg-accent

  mx-auto
  lg:mt-[-13rem]
  lg:max-w-[950px]
  lg:px-[41.5px]
  lg:py-[22.5px]
  z-10

  flex
  justify-between
`};
`;

export const SearchBar = () => {
  return (
    <Container>
      <SearchBarComponent>
        <div>Ngày đến:</div>
        <div>Ngày về:</div>
        <div>Người lớn:</div>
        <div>Trẻ em dưới 5 tuổi:</div>
        <Button variant='white'>Button</Button>
      </SearchBarComponent>
    </Container>
  );
};
