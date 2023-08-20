import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="btn-group flex justify-center">
        <Link to="/" className="btn">
          Home
        </Link>
        <Link to="/app" className="btn">
          App
        </Link>
      </div>
    </div>
  );
};

export default Header;
