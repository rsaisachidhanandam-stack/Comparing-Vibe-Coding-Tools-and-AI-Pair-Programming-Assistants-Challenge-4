"use client"

import { useState, useEffect } from "react"
import { Plus, Check, Circle, Trash2, Filter, LayoutCircleTable, ListChecks, ListTodo } from "lucide-react"

export default function VibeTaskManager() {
  const [tasks, setTasks] = useState<{ id: string; text: string; completed: boolean }[]>([])
  const [inputValue, setInputValue] = useState("")
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("vibe-tasks")
    if (saved) setTasks(JSON.parse(saved))
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("vibe-tasks", JSON.stringify(tasks))
    }
  }, [tasks, mounted])

  const addTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    const newTask = {
      id: crypto.randomUUID(),
      text: inputValue.trim(),
      completed: false,
    }
    setTasks([newTask, ...tasks])
    setInputValue("")
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed
    if (filter === "completed") return t.completed
    return true
  })

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30">
      <div className="max-w-xl mx-auto px-6 py-20">
        <header className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
            Task Pulse
          </h1>
          <p className="text-gray-400 text-sm font-medium">Keep your momentum alive.</p>
        </header>

        <form onSubmit={addTask} className="relative group mb-8">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition duration-500" />
          <div className="relative flex items-center bg-[#161616] rounded-2xl border border-white/5 overflow-hidden">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="What's next on your list?"
              className="flex-1 bg-transparent px-6 py-4 outline-none placeholder:text-gray-600 text-sm"
            />
            <button
              type="submit"
              className="p-4 mr-1 text-purple-400 hover:text-white transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </form>

        <div className="flex items-center gap-2 mb-8 p-1 bg-[#161616] rounded-xl border border-white/5 w-fit">
          {(["all", "active", "completed"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                filter === f
                  ? "bg-purple-600/20 text-purple-400 border border-purple-500/20 shadow-lg shadow-purple-500/10"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filteredTasks.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-white/5 rounded-3xl">
              <div className="bg-[#161616] w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/5">
                <ListTodo className="w-6 h-6 text-gray-600" />
              </div>
              <p className="text-gray-500 text-sm">No tasks found here.</p>
            </div>
          ) : (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className="group relative flex items-center gap-4 bg-[#161616] p-4 rounded-2xl border border-white/5 hover:border-purple-500/20 hover:bg-[#1c1c1c] transition-all duration-300"
              >
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                    task.completed
                      ? "bg-purple-500 border-purple-500"
                      : "border-gray-700 hover:border-purple-500/50"
                  }`}
                >
                  {task.completed && <Check className="w-4 h-4 text-white" />}
                </button>
                <span
                  className={`flex-1 text-sm transition-all duration-300 ${
                    task.completed ? "text-gray-600 line-through" : "text-gray-200"
                  }`}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="p-2 text-gray-700 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="mt-12 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-gray-600 border-t border-white/5 pt-8">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            {tasks.filter((t) => !t.completed).length} items left
          </div>
          <div className="hover:text-purple-400 transition-colors cursor-pointer">
            Vibe Coding Generation • Task Pulse v1.0
          </div>
        </div>
      </div>
    </div>
  )
}
