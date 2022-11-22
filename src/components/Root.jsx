import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Redux/Saga</h1>
          <nav>
            <ul>
              <li>
                <Link to={'users'}>Users</Link>
              </li>
              <li>
                <Link to={`posts`}>Posts</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }