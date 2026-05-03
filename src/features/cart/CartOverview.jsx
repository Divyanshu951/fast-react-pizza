import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between border-t border-border bg-surface px-5 py-4 text-sm sm:px-8">
      <p className="flex items-center gap-4 font-semibold text-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-background">
            {totalCartQuantity}
          </span>
          <span className="text-muted">pizzas</span>
        </span>
        <span className="text-accent">{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link
        to="/cart"
        className="flex items-center gap-1 text-xs uppercase tracking-widest text-foreground transition-colors duration-200 hover:text-accent"
      >
        Open cart
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
}

export default CartOverview;
