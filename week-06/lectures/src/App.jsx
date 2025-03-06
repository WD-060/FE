import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainTemplate from "./layout/MainTemplate";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Students from "./pages/Students";
import Student from "./pages/Student";
import Login from "./pages/Login";
import Regist from "./pages/Regist";
import SecureLayout from "./layout/SecureLayout";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path="/" element={<MainTemplate />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="students" element={<Students />} />
              <Route path="students/:id" element={<Student />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Regist />} />
              <Route path="secure" element={<SecureLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Route>
          </Routes>
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
