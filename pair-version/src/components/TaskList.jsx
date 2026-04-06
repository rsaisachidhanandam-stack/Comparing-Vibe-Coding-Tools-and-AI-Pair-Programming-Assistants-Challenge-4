import TaskItem from "./TaskItem";
import { ListChecks } from "lucide-react";

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <ListChecks size={40} style={{ opacity: 0.1, marginBottom: 12 }} />
        <p>No tasks found in this view</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}