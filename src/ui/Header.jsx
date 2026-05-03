import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-border bg-surface px-5 py-4 sm:px-8">
      <Link
        to="/"
        className="flex items-center gap-2 text-foreground tracking-widest uppercase font-semibold text-sm sm:text-base"
      >
        <span className="text-accent text-xl leading-none">&#9679;</span>
        Fast React Pizza
      </Link>

      <div className="flex items-center gap-4">
        <SearchOrder />
        <Username />
      </div>
    </header>
  );
}

export default Header;
