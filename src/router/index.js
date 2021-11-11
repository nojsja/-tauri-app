import HomePage from '../pages/home';
import page1 from '../pages/page1/index';

const routes = 
  {
    path: "/",
    component: HomePage,
    routes: [
      {
        path: "/page1",
        component: page1,
      }
    ]
  };

export default routes;