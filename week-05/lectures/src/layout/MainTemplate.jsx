import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function MainTemplate() {
  const {
    loading,
    setLoading,
    error,
    setError,
    isAuth,
    setIsAuth,
    token,
    setToken,
    checkAuth,
  } = useAuth();

  console.log(isAuth);

  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainTemplate;
