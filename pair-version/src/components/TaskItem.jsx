import { Check, Trash2 } from "lucide-react";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="task-item">
      <div 
        className={`checkbox ${task.completed ? "checked" : ""}`}
        onClick={() => onToggle(task.id)}
      >
        {task.completed && <Check size={14} color="white" strokeWidth={3} />}
      </div>
      
      <span className={`task-text ${task.completed ? "completed" : ""}`}>
        {task.text}
      </span>
      
      <button 
        className="delete-btn"
        onClick={() => onDelete(task.id)}
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}