import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainTemplate from "./layout/MainTemplate";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Students from "./pages/Students";
import Student from "./pages/Student";
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
              <Route
                path="students"
                element={<Students />}
              />
              <Route
                path="students/:id"
                element={<Student />}
              />
              {/* <Route path='login' />
          <Route path='register' />
          <Route path='secure'>
            <Route path="dashboard" />
            <Route path='settings' />
          </Route> */}
            </Route>
          </Routes>
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
