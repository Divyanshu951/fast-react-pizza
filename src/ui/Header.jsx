import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

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
      <SearchOrder />
    </header>
  );
}

export default Header;
