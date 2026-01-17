import { useEffect, useState } from "react";
import { fetchTasks } from "../services/taskApi";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import DashboardStats from "../components/DashboardStats";
import FilterBar from "../components/FilterBar";
function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
  if (tasks.length > 0) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}, [tasks]);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id != id));
  }

  function handleToggle(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function handleAddTask(newTask) {
    setTasks([newTask, ...tasks]);
  }

  async function loadTasks() {
  try {
    const localData = localStorage.getItem("tasks");

    if (localData) {
      setTasks(JSON.parse(localData));
      return;
    }

    const todos = await fetchTasks();
    setTasks(todos.slice(0, 10));
  } catch (err) {
    setError("Unable to load tasks");
  } finally {
    setLoading(false);
  }
}

  const filteredtasks = tasks.filter((task) => {
    if (!task) return false;

    const text = (task.title || task.todo || "").toLowerCase();

    const matchesFilter =
      filter === "all"
        ? true
        : filter === "completed"
          ? task.completed
          : !task.completed;

    const matchesSearch = text.includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div className="app-container">
      <h1>Task Management System</h1>
      <p>Manage your task efficiently</p>
      <TaskForm onAdd={handleAddTask} />
      <DashboardStats total={total} completed={completed} pending={pending} />

      <FilterBar
        filter={filter}
        onFilterChange={setFilter}
        search={search}
        onSearchChange={setSearch}
      />

      {loading && <p>Loading Tasks...</p>}
      {error && <p>Error:{error}</p>}
      {!loading && !error && (
        <div className="task-list">
          {filteredtasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onToggle={handleToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Dashboard;
