import React, { createContext, useContext, useState, useRef, useCallback } from 'react'

const TaskContext = createContext()

export function TaskProvider({ children }) {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Trabalho' },
    { id: 2, name: 'Estudos' },
  ])

  const [tasks, setTasks] = useState([
    { id: 1, categoryId: 1, title: 'Finalizar relatório', completed: true },
    { id: 2, categoryId: 1, title: 'Enviar e-mail para equipe', completed: false },
    { id: 3, categoryId: 2, title: 'Resolver exercícios de React', completed: false },
    { id: 4, categoryId: 2, title: 'Revisar Context API', completed: false },
  ])

  const nextCategoryId = useRef(3)
  const nextTaskId = useRef(5)

  const addCategory = useCallback((name) => {
    const trimmed = name.trim()
    if (!trimmed) return
    setCategories((prev) => [
      ...prev,
      { id: nextCategoryId.current++, name: trimmed },
    ])
  }, [])

  const addTask = useCallback((categoryId, title) => {
    const trimmed = title.trim()
    if (!trimmed) return
    setTasks((prev) => [
      ...prev,
      {
        id: nextTaskId.current++,
        categoryId,
        title: trimmed,
        completed: false,
      },
    ])
  }, [])

  const toggleTask = useCallback((taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }, [])

  const removeTask = useCallback((taskId) => {
    setTasks((prev) => prev.filter((task) => task.id != taskId))
  }, [])

  const removeCategory = useCallback((categoryId) => {
    setCategories((prev) => prev.filter((c) => c.id != categoryId))
    setTasks((prev) => prev.filter((task) => task.categoryId != categoryId))
  }, [])

  const value = {
    categories,
    tasks,
    addCategory,
    addTask,
    toggleTask,
    removeTask,
    removeCategory,
  }

  return (
    <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
  )
}

export function useTasks() {
  const ctx = useContext(TaskContext)
  if (!ctx) {
    throw new Error('useTasks deve ser usado dentro de TaskProvider')
  }
  return ctx
}
