import { Header, Footer } from './components/layouts';
import Routes from './routes/Routes';
import { Wrapper } from './styles/GlobalStyles';

import { useTranslation } from 'react-i18next';

export const App = () => {
  const { t } = useTranslation(['pages']);
  return (
    <Wrapper id='outer-container'>
      <div id='page-wrap'>
        <Header />
        <Routes />
      </div>
      <h1 className='text-center pt-10'>{t('home.intro.subtitle')}</h1>
      <Footer />
    </Wrapper>
  );
};
