import { useNavigate } from "react-router-dom";

export const Userloginpage = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="w-75 mx-auto  text-center" style={{ marginTop: "250px" }}>
      <h1>User Login Page</h1>
      <br />

      <button
        type="submit"
        className="btn btn-primary btn-block mx-auto "
        onClick={logout}
      >
        LOGOUT
      </button>
    </div>
  );
};
