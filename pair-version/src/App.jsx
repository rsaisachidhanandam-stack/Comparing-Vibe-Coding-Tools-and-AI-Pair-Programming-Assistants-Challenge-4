import { useState } from "react";
import { useTasks } from "./hooks/useTasks";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import ProgressIndicator from "./components/ProgressIndicator";
import { Brain } from "lucide-react";

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
        <div className="header-top">
          <div>
            <h1>Momentum</h1>
            <p className="subtitle">Modular Power. Minimalist View.</p>
          </div>
          <div className="brand-icon">
            <Brain size={24} className="brain-pulse" />
          </div>
        </div>
      </header>

      <ProgressIndicator tasks={tasks} />

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