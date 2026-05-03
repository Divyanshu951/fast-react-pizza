import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground placeholder:text-muted transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent sm:w-52 sm:focus:w-60"
      />
    </form>
  );
}

export default SearchOrder;
