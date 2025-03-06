import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useApp } from "../context/AppContext";
import { useEffect } from "react";

function MainTemplate() {
  const { checkAuth, token, isAuth } = useAuth();
  const { fetchStudents } = useApp();
  const navigate = useNavigate();
  useEffect(() => {
    checkAuth(token);
  }, [token]);

  useEffect(() => {
    fetchStudents("https://jsonplaceholder.typicode.com/users");
  }, []);

  console.log(isAuth);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto min-h-[90vh]">
        <div>
          <button onClick={() => navigate(-1)}>Prev</button>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate(1)}>Next</button>
        </div>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainTemplate;
