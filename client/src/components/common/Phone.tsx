import { styled } from 'twin.macro';

interface Props {
  className?: string;
}

const PhoneLink = styled.a`
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;
  color: var(--accent);
`;

const Phone = ({ className }: Props) => {
  return (
    <PhoneLink href='tel:0216 389 6789' className={className}>
      0216 389 6789
    </PhoneLink>
  );
};

export default Phone;
