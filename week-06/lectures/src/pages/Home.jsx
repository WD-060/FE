import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <h2 className="text-primary text-2xl font-bold">Home</h2>
      <p>Our home for the website</p>
      <Link to="/secure/dashboard" className="text-blue-500">
        Dashboard
      </Link>
      <Link to="/secure/settings" className="text-blue-500">
        Settings
      </Link>
    </section>
  );
}

export default Home;
