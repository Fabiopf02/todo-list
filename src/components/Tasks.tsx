import { Empty } from './Empty'
import { ITask, Task } from './Task'

interface TasksProps {
  tasks: ITask[]
  onDeleteTask: (task: ITask) => void
  onCompleteTask: (task: ITask) => void
}

export function Tasks({ tasks, onDeleteTask, onCompleteTask }: TasksProps) {
  if (!tasks.length) return <Empty />

  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onCompleteTask={onCompleteTask}
        />
      ))}
    </>
  )
}
