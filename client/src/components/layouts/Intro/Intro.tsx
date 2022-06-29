import { Bg1, PeachBlossom } from '../../../constants/images';
import { Subtitle, Title } from '../../common/Heading';

import { Image } from '../../common/Image';
import { BgWrapper, Content, Details, PeachBlossomWrapper } from './style';

interface IntroProps {
  title?: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: any;
  spanColor?: any;
  span?: string;
  image?: string;
  background?: string;
  subtitle?: string;
  details?: string;
}

export const Intro = ({
  title,
  titleLevel,
  subtitle,
  details,
  image,
  color,
  span,
  spanColor,
}: IntroProps) => {
  return (
    <section>
      <BgWrapper>
        <Image src={Bg1} width='100%' />
      </BgWrapper>
      <PeachBlossomWrapper>
        <Image src={PeachBlossom} />
      </PeachBlossomWrapper>

      <Content>
        {image ? (
          <figure>
            <Image src={image} />
          </figure>
        ) : (
          ''
        )}

        {title ? (
          <Title level={titleLevel} color={color}>
            {title} <span color={spanColor}>{span}</span>
          </Title>
        ) : (
          ''
        )}
        {subtitle ? <Subtitle>{subtitle}</Subtitle> : ''}
        <Details>{details}</Details>
      </Content>
    </section>
  );
};
