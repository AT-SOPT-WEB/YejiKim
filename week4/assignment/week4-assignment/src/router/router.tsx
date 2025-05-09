import { createBrowserRouter } from 'react-router';
import Login from '../pages/Login';
import MyPage from '../pages/MyPage/MyPage';
import Signup from '../pages/Signup';

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
  },
]);

export default router;
