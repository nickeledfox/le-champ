import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import tw, { styled } from 'twin.macro';

export const StyledDateRange = styled(DateRange)`
  position: absolute;
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);

  /* Styles taken from: 'https://codesandbox.io/s/mte55?file=/src/styles.scss */
  .rdrNextPrevButton {
    margin-top: 5px;
    background-color: transparent !important;
  }
  .rdrDayToday .rdrDayNumber span {
    &:after {
      bottom: 10px;
    }
  }
  .rdrMonthName {
    text-align: center;
  }
  .rdrMonth {
    width: 280px !important;
  }
  .rdrDay {
    width: 40px !important;
    height: 40px !important;
  }
  .rdrSelected,
  .rdrInRange,
  .rdrStartEdge,
  .rdrEndEdge {
    top: 3px;
    bottom: 3px;
  }
  .rdrDayHovered {
    border-radius: 50%;
  }
  .rdrDayNumber {
    top: 0px;
    bottom: 0px;
  }
  .rdrInRange {
  }
  .rdrEndEdge {
    right: 3px;
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .rdrStartEdge {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
    left: 3px;
  }

  .rdrDayStartPreview {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
    left: 3px;
  }

  .rdrDayEndPreview {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
    right: 3px;
  }
  .rdrDayStartPreview,
  .rdrDayInPreview,
  .rdrDayEndPreview {
    top: 3px !important;
    bottom: 3px !important;
  }

  .rdrDayEndOfMonth,
  .rdrDayEndOfWeek {
    .rdrDayInPreview,
    .rdrDayStartPreview {
      right: 3px !important;
    }
    .rdrDayStartPreview {
      left: 3px !important;
    }
  }
  .rdrDayEndOfMonth,
  .rdrDayEndOfWeek {
    .rdrInRange,
    .rdrStartEdge {
      border-top-right-radius: 50% !important;
      border-bottom-right-radius: 50% !important;
      right: 3px;
    }
  }
  .rdrDayStartOfMonth,
  .rdrDayStartOfWeek {
    .rdrInRange,
    .rdrEndEdge {
      border-top-left-radius: 50% !important;
      border-bottom-left-radius: 50% !important;
      left: 3px;
    }
  }

  .rdrDayEndOfMonth,
  .rdrDayEndOfWeek {
    .rdrInRange,
    .rdrStartEdge {
      right: 3px;
    }
  }

  .rdrDayStartOfMonth,
  .rdrDayStartOfWeek {
    .rdrDayInPreview,
    .rdrDayEndPreview {
      left: 3px;
    }
  }

  .rdrDayEndOfMonth,
  .rdrDayEndOfWeek {
    .rdrDayInPreview,
    .rdrDayStartPreview {
      right: 3px;
    }
  }
`;
