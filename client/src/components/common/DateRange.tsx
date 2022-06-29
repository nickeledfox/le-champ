import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import tw, { styled, css } from 'twin.macro';

export const StyledDateRange = styled(DateRange)`
  ${tw`absolute 
      left-[520px] 
      md:top-[110px] lg:left-[50px]
      2xl:left-[165px]
  `}

  ${css`
    border: 1px solid #e0e0e0;
    border-radius: var(--border-radius);

    .rdrDayToday .rdrDayNumber span:after {
      background-color: var(--accent);
    }

    /* This styles taken from: 
    'https://codesandbox.io/s/mte55?file=/src/styles.scss 
    Purpose: Just to make it round :) 
  */
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
  `}
`;
