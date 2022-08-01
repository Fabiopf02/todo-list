import { ITask } from '../components/Task'

export const getSavedTasks = (): ITask[] => {
  try {
    const saved = localStorage.getItem('tasks')
    if (!saved) return []
    return JSON.parse(saved)
  } catch (err: any) {
    return []
  }
}

export const saveTasks = (tasks: ITask[]) => {
  const toSave = JSON.stringify(tasks)
  localStorage.setItem('tasks', toSave)
}
