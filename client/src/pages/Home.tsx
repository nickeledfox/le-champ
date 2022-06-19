import tw, { styled, css } from 'twin.macro';

import { Hero, SearchBar, Spa } from '../components/containers/home';

export const Home = () => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <Spa />
    </div>
  );
};
