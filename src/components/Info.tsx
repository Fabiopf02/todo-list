import styles from './Info.module.css'
import { ITask } from './Task'

interface InfoProps {
  tasks: ITask[]
}

export function Info({ tasks }: InfoProps) {
  const createdTasks = tasks.length
  const doneTasks = tasks.filter((task) => task.done).length

  return (
    <div className={styles.info}>
      <div className={styles.created}>
        <p>Tarefas criadas</p>
        <span className='counter'>{createdTasks}</span>
      </div>
      <div className={styles.done}>
        <p>Concluídas</p>
        <span className='counter'>
          {doneTasks ? `${doneTasks} de ${createdTasks}` : 0}
        </span>
      </div>
    </div>
  )
}
