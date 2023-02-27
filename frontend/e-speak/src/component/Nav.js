import { Link } from 'react-router-dom';
function Nav() {
  return (
    <div className="nav_container">
      <div className="logo_container">
        <h4>e-speak</h4>
      </div>
      <div className="links_container">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about-us">
            <li >About us</li>
          </Link>
          <li>Courses</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
