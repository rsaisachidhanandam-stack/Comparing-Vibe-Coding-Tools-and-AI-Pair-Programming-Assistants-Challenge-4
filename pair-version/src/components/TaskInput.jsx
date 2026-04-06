import { useState } from "react";
import { Plus } from "lucide-react";

export default function TaskInput({ onAdd }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onAdd(value.trim());
      setValue("");
    }
  };

  return (
    <form className="input-group" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="add-btn">
        <Plus size={20} />
      </button>
    </form>
  );
}