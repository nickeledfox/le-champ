import { Button } from '../components/Button';
import { H } from '../components/Heading';

export const Home = () => {
  return (
    <div>
      Home
      <H level={1} as={'h1'}>
        Test <span>Title</span>
      </H>
    </div>
  );
};
