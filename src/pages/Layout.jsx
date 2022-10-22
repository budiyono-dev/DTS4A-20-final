import { Link, Outlet } from 'react-router-dom';
import { ROUTES } from '../constant/routes';

function Layout() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.TOP_STORIES}>TOP</Link>
            </li>
            <li>
              <Link to={ROUTES.ALL_NEWS}>All News</Link>
            </li>
            <li>
              <Link to={ROUTES.LOGIN}>Login</Link>
            </li>
            <li>
              <Link to={ROUTES.REGISTER}>Register</Link>
            </li>
            <hr />
            <Outlet></Outlet>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Layout;
