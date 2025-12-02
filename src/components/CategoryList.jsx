import { useTasks } from '../context/TaskContext'
import AddTask from './AddTask'
import TaskList from './TaskList'

function CategoryList() {
  const { categories, removeCategory } = useTasks()

  if (!categories.length) {
    return <p className="empty">Nenhuma categoria criada ainda.</p>
  }

  return (
    <div className="category-list">
      {categories.map((category) => (
        <div key={category.id} className="category-card">
          <div className="category-header">
            <h2 className="category-title">{category.name}</h2>
            <button
              type="button"
              className="danger-btn"
              onClick={() => removeCategory(category.id)}
            >
              Excluir
            </button>
          </div>
          <AddTask categoryId={category.id} />
          <TaskList categoryId={category.id} />
        </div>
      ))}
    </div>
  )
}

export default CategoryList
