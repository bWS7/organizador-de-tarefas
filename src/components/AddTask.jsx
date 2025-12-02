import { useState } from 'react'
import { useTasks } from '../context/TaskContext'

function AddTask({ categoryId }) {
  const { addTask } = useTasks()
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    addTask(categoryId, title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="inline-form small-margin">
      <div className="field-group">
        <label className="field-label">Adicionar Tarefa</label>
        <input
          type="text"
          placeholder="Descreva a tarefa..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default AddTask
