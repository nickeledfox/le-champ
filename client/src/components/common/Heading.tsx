import React from 'react';
import tw, { styled, css } from 'twin.macro';

export const BaseTitle = tw.span`
  font-medium
  block 
  m-0
`;

export const Subtitle = tw(BaseTitle)`
  my-[10px]
  tracking-[2.8px]
  text-[14px] sm:text-[16px]
  leading-[18px] sm:leading-[20px]
`;

interface HeadingStyleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: 'primary' | 'secondary' | 'accent' | undefined;
  spanColor?: 'primary' | 'secondary' | undefined;
  as?: any;
  center?: boolean;
  span?: string;
}

interface HeadingProps extends HeadingStyleProps {}

export const Title: React.FC<HeadingProps> = ({
  children,
  span,
  level,
  color,
  spanColor,
  className,
}) => {
  return (
    <H className={className} level={level} color={color} spanColor={spanColor}>
      {children} <span> {span} </span>
    </H>
  );
};

export const H = styled(BaseTitle)(
  ({ level, color, spanColor, center }: HeadingStyleProps) => [
    css`
      font-family: 'Diavolo';
      font-weight: 700;
    `,

    center === true && tw`text-center`,

    color === 'secondary' && tw`text-brown`,
    color === 'accent' && tw`text-accent`,

    spanColor === 'primary' && tw`[> span]:(text-accent)`,
    spanColor === 'secondary' && tw`[> span]:(text-brown)`,

    level === 1 && [
      `
    font-size: 60px;
    line-height: 60px;
    text-transform: uppercase;
  `,
    ],

    level === 2 && [
      tw`
        text-[36px] md:text-[50px]
        leading-[46.8px] md:leading-[65px]
        capitalize
    `,
    ],

    level === 3 && [
      `
    font-size: 44px;
    line-height: 57.2px;
  `,
    ],

    level === 4 && [
      `
    font-size: 36px;
    line-height: 36px;

  `,
    ],

    level === 5 && [
      `
    font-size: 20px;
    line-height: 20px;
    font-family: 'Google Sans'
  `,
    ],

    level === 6 && [
      `
    font-size: 16px;
    line-height: 124.5%;
    font-family: 'Google Sans'
  `,
    ],
  ]
);
