import { Routes, Route } from 'react-router-dom';

import {
  Home,
  Contact,
  Rooms,
  Room,
  Story,
  NotFound,
  Dining,
  HotSprings,
  Gallery,
  Attractions,
} from '../pages';

const RoutesList = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/our-story' element={<Story />} />
      <Route path='/dining' element={<Dining />} />
      <Route path='/hot-springs' element={<HotSprings />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/attractions' element={<Attractions />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/rooms' element={<Rooms />} />
      <Route path='/rooms/:id' element={<Room />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default RoutesList;
