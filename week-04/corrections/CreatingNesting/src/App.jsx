import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Student from "./components/Student";

function App() {
  const studentData = {
    firstName: 'Testy',
    lastName: 'McTest',
    age: 42,
    course: 'Web Development',
    city: 'Berlin',
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    gpa: 80,
    graduate: false,
  };
  
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Student student={studentData}  />
      </main>
      <Footer />
    </>
  );
}

export default App;
