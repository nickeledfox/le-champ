import { styled } from 'twin.macro';
import { Hero } from '../components/common/Hero';
import { Intro } from '../components/layouts';
import { DiningBg } from '../constants/images';

export const Dining = () => {
  return (
    <>
      <Hero src={DiningBg} />
      <main>
        <SpetialStyleIntro>
          <Intro
            title='Great cuisine'
            subtitle='LE CHAMP'
            color={'secondary'}
            titleLevel={2}
            details='After the exciting discovering journey, visitors should definitely immerse themselves in great atmosphere and dining experience at our luxurious restaurant, with made-in-nature signature dishes such as ember-grilled stream fish, delicios grilled pork, fragrant sticky rice or pure thousand-year-Shan Tuyet tea.

          Being a blend between Asian and Western architecture, our restaurant brings luxurious yet cozy vibes to customers. Amidst the poetic scene, diners will enjoy their meals to the fullest with the most dedicated flavors of the Northwest highlands cuisine.'
          />
        </SpetialStyleIntro>
      </main>
    </>
  );
};

const SpetialStyleIntro = styled.div`
  p {
    width: 800px;
  }

  span:first-child {
    font-size: 36px;
    letter-spacing: -0.03em;
    line-height: 70px;
  }

  span:nth-child(2) {
    color: var(--accent);
    font-size: 50px;
    font-family: 'Diavolo';
    font-weight: 700;
    letter-spacing: 0.3px;
    letter-spacing: -0.04em;
  }
`;
