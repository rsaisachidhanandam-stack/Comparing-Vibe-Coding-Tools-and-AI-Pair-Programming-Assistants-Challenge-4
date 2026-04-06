import { useState } from "react";
import { useTasks } from "./hooks/useTasks";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

function App() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <main>
      <header>
        <h1>Momentum</h1>
        <p className="subtitle">Modular Power. Minimalist View.</p>
      </header>

      <TaskInput onAdd={addTask} />
      <Filter activeFilter={filter} setFilter={setFilter} />
      <TaskList 
        tasks={filteredTasks} 
        onToggle={toggleTask} 
        onDelete={deleteTask} 
      />
    </main>
  );
}

export default App;