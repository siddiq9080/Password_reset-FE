import { Link } from "react-router-dom";

export let Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <h1>Welcome to the Home Page!</h1>
        <h2 className="text-center">Would you like to? </h2>
        <div className="d-flex">
          <Link to="/login" className="btn btn-primary m-2 w-50">
            Login
          </Link>
          <Link to="/register" className="btn btn-secondary m-2 w-50">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
