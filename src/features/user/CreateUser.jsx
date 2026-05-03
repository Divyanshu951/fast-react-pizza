import { useState } from "react";
import Button from "../../ui/Button";
import { updateName } from "./userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <p className="text-xs uppercase tracking-widest text-muted">
        Enter your name to get started
      </p>

      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Your full name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input w-64 sm:w-72"
        />

        {username !== "" && (
          <Button type="primary">Start ordering</Button>
        )}
      </div>
    </form>
  );
}

export default CreateUser;
