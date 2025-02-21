import Navigation from "./Navigation";

function Header() {
    const style = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      };
  return (
    <header
      style={style}
    >
      <h1 style={{fontSize: "1.5rem"}}>My Website</h1>
      <Navigation />
    </header>
  );
}

export default Header;
