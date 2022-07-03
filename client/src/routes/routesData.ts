interface Route {
  path: string;
  name: string;
  props?: any;
}

const mainRoutes: Route[] = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: 'our-story',
    name: 'Our Story',
  },
  {
    path: 'rooms',
    name: 'Rooms',
  },
  {
    path: 'dining',
    name: 'Dining',
  },
  {
    path: 'hot-springs',
    name: 'Hot Springs',
  },
  {
    path: 'gallery',
    name: 'Gallery',
  },
  {
    path: 'attractions',
    name: 'Attractions',
  },
  {
    path: 'contact-us',
    name: 'Contact Us',
  },
];

const routes: Route[] = [...mainRoutes];

export default routes;
