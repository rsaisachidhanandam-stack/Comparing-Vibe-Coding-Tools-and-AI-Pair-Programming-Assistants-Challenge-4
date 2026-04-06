# Comparing Vibe Coding Tools and AI Pair Programming Assistants | Challenge #4

This repository contains two versions of a Task Manager application, built using different AI-assisted development approaches: **Vibe Coding** and **AI Pair Programming**.

## Live Deployments
- **Vibe version:** [https://task-manager-ai-comparison-ibli.vercel.app/](https://task-manager-ai-comparison-ibli.vercel.app/)
- **Pair version:** [https://task-manager-ai-comparison.vercel.app/](https://task-manager-ai-comparison.vercel.app/)

---

## Comparison Table

| Dimension     | Vibe Version (v0) | Pair Version (Cursor/Copilot) | Verdict |
|---------------|--------------------------|--------------------------|---------|
| **Speed**         | Generated full layout and logic in **9 minutes** from one prompt. | Took **42 minutes** to build file-by-file with manual structure. | **Vibe faster** |
| **Control**       | Tool decided on component structure (single large file). I couldn't choose the hook pattern. | I decided every function signature and component split. Accepted **24/32** suggestions. | **Pair better** |
| **Code Quality**  | Generated a single file with **151 lines** of code. Difficult for teammates to navigate. | Clean, modular components. Longest component was only **35 lines**. | **Pair better** |
| **Explainability**| Generated a complex UI/Logic mix that I had to read carefully to fully understand. | I wrote the logic myself; I can explain every decision in `filteredTasks` (App.jsx:L9). | **Pair better** |
| **Editability**   | Adding a due date feature took **22 mins** because filter logic was coupled with UI. | Adding a due date took only **7 mins** due to clean separation in `useTasks.js`. | **Pair better** |

---

## When I Would Use Each Tool

### **Vibe coding tool for:**
Quickly demoing a UI concept or building a throwaway proof of concept for a client. It’s perfect when you need something visual and functional in under 15 minutes and don't care about the long-term maintenance of the code.

### **AI pair programming for:**
Any code that is going into production or will be maintained by a team. It's the right choice when requirements are expected to change, as the deliberate control over every line makes debugging and extending the app significantly faster in the long run.

---

## Technical Details
- **Vibe Tool Used:** v0 / Lovable
- **Pair Tool Used:** Antigravity (AI Coding Assistant)
- **Total Files (Vibe):** 1 main file (page.tsx)
- **Total Files (Pair):** 6 files (Components + Hooks)
