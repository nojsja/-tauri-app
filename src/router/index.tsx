import Page1 from '../pages/page1/index';
import HomePage from '../pages/home';

const routes =
  {
    path: "/",
    component: HomePage,
    routes: [
      {
        path: "/page1",
        component: Page1,
      },
    ]
  };

export default routes;