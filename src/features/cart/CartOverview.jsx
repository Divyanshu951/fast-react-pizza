import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div
      style={{
        border: "2px solid green",
        padding: "12px 20px",
        borderRadius: "12px",
      }}
    >
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
