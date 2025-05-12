import { createBrowserRouter } from 'react-router';
import Login from '../pages/Login';
import MyPage from '../pages/MyPage/MyPage';
import Signup from '../pages/Signup';
import MyPageInfo from '../pages/MyPage/MyPageInfo';
import MyPageSearch from '../pages/MyPage/MyPageSearch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/mypage',
    element: <MyPage />,
    children: [
      {
        path: 'info',
        element: <MyPageInfo />,
      },
      {
        path: 'search',
        element: <MyPageSearch />,
      },
    ],
  },
]);

export default router;
