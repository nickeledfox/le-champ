import tw, { styled, css } from 'twin.macro';

export const App = () => {
  return (
    <>
      <h1 className='text-3xl font-bold underline text-accent'>
        Hello world!!
      </h1>
    </>
  );
};

const Test = styled.p`
  ${tw`
        text-accent
`};
`;
