import { useAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const { user, setUser, setToken, setIsAuth, isAuth } = useAuth();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", "123456789");
    setToken("123456789");
    setIsAuth(true);
    setUser({
      username: "",
      email: "",
      password: "",
    });
  };

  if (isAuth) navigate("/secure/dashboard");
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          value={user.email}
          type="email"
          id="email"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          value={user.password}
          type="password"
          id="password"
          name="password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
