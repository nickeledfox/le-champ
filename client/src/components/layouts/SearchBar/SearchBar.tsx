import { Container } from '../../../styles/GlobalStyles';
import { Button } from '../../common/Button';
import { StyledDateRange } from '../../common/DateRange';

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

import { format } from 'date-fns';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchBar: React.FC<SearchBarComponentProps> = ({ variant }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  return (
    <Container className='relative'>
      {openDate && (
        <StyledDateRange
          className='top-[110px] left-[125px]'
          editableDateInputs={false}
          onChange={(item: {
            selection: { startDate: Date; endDate: Date; key: string };
          }) => setDate([item.selection])}
          ranges={date}
          minDate={new Date()}
          rangeColors={['#613f1b', '#3f57b2', '#e7a925']}
        />
      )}
      <SearchBarComponent variant={variant}>
        <div className='SearchItem'>
          <OptionName>Ngày đến:</OptionName>
          <div>
            <span onClick={() => setOpenDate(!openDate)}>{`${format(
              date[0].startDate,
              'MM/dd/yyyy'
            )} `}</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>

        <div className='SearchItem'>
          <OptionName>Ngày về:</OptionName>
          <div>
            <span onClick={() => setOpenDate(!openDate)}>{`${format(
              date[0].endDate,
              'MM/dd/yyyy'
            )}`}</span>
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
