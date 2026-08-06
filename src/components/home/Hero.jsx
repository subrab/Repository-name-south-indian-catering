import hero from "../../assets/hero.png";

function Hero() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "80px",
        background: "#FFF8F0",
      }}
    >
      <div style={{ maxWidth: "550px" }}>
        <h1
          style={{
            fontSize: "55px",
            color: "#7A1F1F",
            marginBottom: "20px",
          }}
        >
          Authentic Indian Cuisine.
        </h1>

        <h2
          style={{
            fontSize: "36px",
            color: "#D4AF37",
          }}
        >
          Crafted for the World.
        </h2>

        <p
          style={{
            marginTop: "25px",
            lineHeight: "30px",
            fontSize: "18px",
          }}
        >
          Serving weddings, corporate events, family celebrations and
          international occasions with authentic Indian hospitality.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "15px 35px",
            border: "none",
            background: "#7A1F1F",
            color: "white",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Request a Quote
        </button>
      </div>

      <img
        src={hero}
        alt="South Indian Catering"
        style={{
          width: "500px",
          borderRadius: "20px",
        }}
      />
    </section>
  );
}

export default Hero;