import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="flex min-h-full flex-col items-center justify-center px-6 py-20 text-center">
      {/* Tagline badge */}
      <span className="mb-6 inline-block rounded-full border border-border bg-surface px-4 py-1 text-xs uppercase tracking-widest text-muted">
        Hot &amp; Fresh · Always On Time
      </span>

      {/* Hero heading */}
      <h1 className="mb-4 text-balance text-5xl font-semibold uppercase leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl">
        The Best
        <br />
        <span className="text-accent">Pizza.</span>
      </h1>

      <p className="mb-10 max-w-md text-pretty text-sm leading-relaxed text-muted sm:text-base">
        Straight out of the oven, straight to you. No account needed — just
        your name and appetite.
      </p>

      {/* Divider */}
      <div className="mb-10 h-px w-16 bg-border" />

      {/* CTA */}
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}

      {/* Stats row */}
      <div className="mt-16 flex flex-wrap justify-center gap-10 text-center">
        {[
          { value: "30+", label: "Pizza varieties" },
          { value: "~30min", label: "Average delivery" },
          { value: "100%", label: "Fresh ingredients" },
        ].map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center">
            <span className="text-2xl font-semibold text-accent">{value}</span>
            <span className="mt-1 text-xs uppercase tracking-widest text-muted">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
