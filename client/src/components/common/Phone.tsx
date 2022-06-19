import { styled } from 'twin.macro';

const PhoneLink = styled.a`
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: var(--accent);
`;

const Phone = () => {
  return <PhoneLink href='tel:0216 389 6789'>0216 389 6789</PhoneLink>;
};

export default Phone;
