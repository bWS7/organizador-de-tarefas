import { useTasks } from '../context/TaskContext'

function TaskList({ categoryId }) {
  const { tasks, toggleTask, removeTask } = useTasks()
  const categoryTasks = tasks.filter((task) => task.categoryId === categoryId)

  if (!categoryTasks.length) {
    return <p className="empty">Nenhuma tarefa nesta categoria.</p>
  }

  return (
    <ul className="task-list">
      {categoryTasks.map((task) => (
        <li key={task.id} className="task-row">
          <label className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span className={task.completed ? 'completed' : ''}>
              {task.title}
            </span>
          </label>
          <button
            type="button"
            className="icon-btn"
            onClick={() => removeTask(task.id)}
            aria-label="Excluir tarefa"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
