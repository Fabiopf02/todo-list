import { FiTrash2 } from 'react-icons/fi'
import styles from './Task.module.css'

export interface ITask {
  id: number
  content: string
  done: boolean
}

interface TaskProps {
  task: ITask
  onDeleteTask: (task: ITask) => void
  onCompleteTask: (task: ITask) => void
}

export function Task({ task, onDeleteTask, onCompleteTask }: TaskProps) {
  return (
    <div className={[styles.task, task.done ? styles.done : ''].join(' ')}>
      <div className={styles.formControl}>
        <input
          type='checkbox'
          defaultChecked={task.done}
          onChange={() => onCompleteTask(task)}
        />
      </div>
      <p>{task.content}</p>
      <button onClick={() => onDeleteTask(task)}>
        <FiTrash2 size={18} />
      </button>
    </div>
  )
}
