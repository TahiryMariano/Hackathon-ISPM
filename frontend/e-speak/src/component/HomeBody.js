import { Link } from 'react-router-dom';

function HomeBody() {
  return (
    <div className="home_body">
      <h1>Let's learn foreign language</h1>
      <Link to="/Login">
        <button>Get started</button>
      </Link>
    </div>
  );
}

export default HomeBody;
