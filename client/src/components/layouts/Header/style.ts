import { Link } from 'react-router-dom';
import tw, { styled } from 'twin.macro';

export const InfoHeader = styled.header`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  background-color: #fff;
`;

export const InfoItems = tw.ul`
  flex 
  justify-between
  items-center
`;
export const InfoItem = tw.li`
  flex 
  items-center
`;

export const Icon = styled.div`
  padding-right: 12px;
`;

export const LogoWrapper = styled(Link)`
  padding-top: 12px;
  padding-bottom: 6px;
`;
