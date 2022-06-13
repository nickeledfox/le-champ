import { Routes, Route } from 'react-router-dom';

import { Home, Contact, Rooms, Room, Story, NotFound } from '../pages';

const RoutesList = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/story' element={<Story />} />
        <Route path='/searchresults' element={<Rooms />} />
        <Route path='/searchresults/:id' element={<Room />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutesList;
