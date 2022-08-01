import React, { ChangeEvent, useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import styles from './NewTask.module.css'

interface NewTaskProps {
  onSubmitTask: (content: string) => void
}

export function NewTask({ onSubmitTask }: NewTaskProps) {
  const [taskContent, setTaskContent] = useState('')
  const isNewTaskEmpty = taskContent.length === 0

  const onSubmitForm = (event: React.FormEvent) => {
    event.preventDefault()
    if (!taskContent.length) return
    onSubmitTask(taskContent)
    setTaskContent('')
  }

  const handleNewTaskContentChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setTaskContent(value)
  }

  return (
    <form className={styles.form} onSubmit={onSubmitForm}>
      <input
        type='text'
        placeholder='Adicione uma nova tarefa'
        value={taskContent}
        onChange={handleNewTaskContentChange}
      />
      <button disabled={isNewTaskEmpty}>
        Criar
        <FiPlusCircle size={18} />
      </button>
    </form>
  )
}
