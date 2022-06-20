import { Link } from 'react-router-dom';
import { CopyrightImg } from '../../../constants/images';
import { CoppyrightContainer, ImageContainer, Text } from './style';

export const Coppyright = () => {
  return (
    <CoppyrightContainer>
      <ImageContainer>
        <img src={CopyrightImg} alt='' />
      </ImageContainer>
      <Link to='#'>
        <Text>Coppyright 2022 - Le Champ Resort</Text>
      </Link>
    </CoppyrightContainer>
  );
};
