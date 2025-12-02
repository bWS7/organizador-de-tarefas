import { useState } from 'react'
import { useTasks } from '../context/TaskContext'

function AddCategory() {
  const { addCategory } = useTasks()
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    addCategory(name)
    setName('')
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="inline-form">
        <div className="field-group">
          <label className="field-label">Adicionar Nova Categoria</label>
          <input
            type="text"
            placeholder="Ex: Casa, Pessoal..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
      <hr />
    </div>
  )
}

export default AddCategory
