import { Container } from '../../../styles/GlobalStyles';
import { Button } from '../../common/Button';

import {
  faChevronDown,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  OptionName,
  SearchBarComponent,
  SearchBarComponentProps,
} from './style';

// TODO: Create room searching

export const SearchBar: React.FC<SearchBarComponentProps> = ({ variant }) => {
  return (
    <Container>
      <SearchBarComponent variant={variant}>
        <div className='SearchItem'>
          <OptionName>Ngày đến:</OptionName>
          <div>
            <span>20/10/2021</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>

        <div className='SearchItem'>
          <OptionName>Ngày về:</OptionName>
          <div>
            <span>21/10/2021</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>

        <div className='SearchItem'>
          <OptionName>Người lớn:</OptionName>
          <div>
            <span>03</span>
            <FontAwesomeIcon icon={faPlus} />
            <FontAwesomeIcon icon={faMinus} />
          </div>
        </div>

        <div className='SearchItem'>
          <OptionName>Trẻ em dưới 5 tuổi:</OptionName>
          <div>
            <span>01</span>
            <FontAwesomeIcon icon={faPlus} />
            <FontAwesomeIcon icon={faMinus} />
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <Button variant='white'>Tìm phòng</Button>
        </div>
      </SearchBarComponent>
    </Container>
  );
};
