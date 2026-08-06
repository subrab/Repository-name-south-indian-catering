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
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Menu</a>
  <a href="#">Gallery</a>
  <a href="#">Contact</a>

  <button
    style={{
      background: "#7A1F1F",
      color: "white",
      padding: "12px 24px",
      borderRadius: "999px",
      border: "none",
    }}
  >
    Get a Quote
  </button>
</nav>
      </div>
    </header>
  );
}

export default Navbar;