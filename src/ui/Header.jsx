import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        border: "2px solid red",
        padding: "12px 20px",
        borderRadius: "12px",
      }}
    >
      <Link to="/">Fast react pizza</Link>
    </header>
  );
}

export default Header;
