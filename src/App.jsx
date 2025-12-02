import AddCategory from './components/AddCategory'
import CategoryList from './components/CategoryList'
import { TaskProvider } from './context/TaskContext'

function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <h1 className="app-title">Gerenciador de Tarefas por Categoria</h1>
        <AddCategory />
        <CategoryList />
      </div>
    </TaskProvider>
  )
}

export default App
