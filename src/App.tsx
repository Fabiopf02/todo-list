import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

import styles from './App.module.css'
import { Info } from './components/Info'
import { ITask } from './components/Task'
import { Tasks } from './components/Tasks'
import { useState } from 'react'
import { getSavedTasks, saveTasks } from './utils/storage'

function App() {
  const [tasks, setTasks] = useState<ITask[]>(() => getSavedTasks())

  const updateTasks = (tasks: ITask[]) => {
    saveTasks(tasks)
    setTasks(tasks)
  }

  const createNewTask = (content: string) => {
    const taskId = new Date().getTime()
    const newTask = { content, done: false, id: taskId }
    updateTasks([newTask, ...tasks])
  }

  const deleteTask = (deletedTask: ITask) => {
    const filteredTasks = tasks.filter((task) => task.id !== deletedTask.id)
    updateTasks(filteredTasks)
  }

  const completeTask = (doneTask: ITask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === doneTask.id ? { ...task, done: !task.done } : task
    )
    updateTasks(updatedTasks)
  }

  return (
    <>
      <Header />
      <div className={styles.content}>
        <NewTask onSubmitTask={createNewTask} />
        <Info tasks={tasks} />
        <Tasks
          tasks={tasks}
          onDeleteTask={deleteTask}
          onCompleteTask={completeTask}
        />
      </div>
    </>
  )
}

export default App
