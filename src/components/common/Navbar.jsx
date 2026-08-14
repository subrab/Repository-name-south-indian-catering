import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-red-500 text-white p-6">
      <div className="flex justify-between items-center">

        <h1 className="text-3xl">Annam Global</h1>

        <nav
  style={{
    display: "flex",
    gap: "40px",
    alignItems: "center",
  }}
>
  <Link to="/#home">Home</Link>
  <Link to="/#about">About</Link>
  <Link to="/#services">Services</Link>
  <Link to="/#menu">Menu</Link>
  <Link to="/#gallery">Gallery</Link>
  <Link to="/#contact">Contact</Link>

  <Link
    to="/request-quote"
    style={{
      background: "#7A1F1F",
      color: "white",
      padding: "12px 24px",
      borderRadius: "999px",
      border: "none",
      textDecoration: "none",
    }}
  >
    Get a Quote
  </Link>
</nav>
      </div>
    </header>
  );
}

export default Navbar;
