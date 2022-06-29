import { Container } from '../../../styles/GlobalStyles';
import { Button } from '../../common/Button';

import {
  faChevronDown,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OptionName, SearchBarComponent, Props } from './style';

import { format } from 'date-fns';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledDateRange } from '../../common/DateRange';

export const SearchBar: React.FC<Props> = ({ variant }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/rooms', { state: { date } });
  };

  return (
    <Container className='relative'>
      {openDate && (
        <StyledDateRange
          // className='md:top-[110px] md:left-[125px]'
          display='horizontal'
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
          <OptionName>Check-in*</OptionName>
          <div>
            <span
              className='cursor-pointer'
              onClick={() => setOpenDate(!openDate)}
            >
              {`${format(date[0].startDate, 'MM/dd/yyyy')} `}
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </div>
        </div>

        <div className='SearchItem'>
          <OptionName>Check-out*</OptionName>
          <div>
            <span
              className='cursor-pointer'
              onClick={() => setOpenDate(!openDate)}
            >
              {`${format(date[0].endDate, 'MM/dd/yyyy')}`}
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </div>
        </div>

        <div className='SearchItem'>
          <OptionName>Adults</OptionName>
          <div>
            <span>
              03
              <span className='IconWrapper'>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faMinus} />
              </span>
            </span>
          </div>
        </div>

        <div className='SearchItem'>
          <OptionName>Children</OptionName>
          <div>
            <span>
              01
              <span>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faMinus} />
              </span>
            </span>
          </div>
        </div>
        <div className='ButtonWrapper'>
          <Button variant='white' onClick={handleSearch}>
            Search
          </Button>
        </div>
      </SearchBarComponent>
    </Container>
  );
};
