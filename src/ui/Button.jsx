import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-flex items-center justify-center rounded-full bg-accent font-semibold uppercase tracking-widest text-background transition-colors duration-200 hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50";

  const styles = {
    primary: base + " px-6 py-3 text-sm md:px-8 md:py-4 md:text-base",
    small: base + " px-4 py-2 text-xs",
    secondary:
      "inline-flex items-center justify-center rounded-full border border-border bg-transparent px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 md:px-6 md:py-3",
    round: base + " px-3 py-2 text-xs md:px-4 md:py-2.5",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
