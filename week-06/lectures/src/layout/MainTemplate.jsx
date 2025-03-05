import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useApp } from "../context/AppContext";
import { useEffect } from "react";

function MainTemplate() {
  const { checkAuth, token } = useAuth();
  const { fetchStudents } = useApp();

  useEffect(() => {
    checkAuth(token);
  }, [token]);

  useEffect(() => {
    fetchStudents("https://jsonplaceholder.typicode.com/users");
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto min-h-[90vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainTemplate;
