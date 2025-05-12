import Header from '../../shared/components/Header';
import { Outlet } from 'react-router';

function MyPage() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default MyPage;
