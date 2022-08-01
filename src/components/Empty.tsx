import Clipboard from '../assets/Clipboard.svg'
import styles from './Empty.module.css'

export function Empty() {
  return (
    <div className={styles.emptyContainer}>
      <img src={Clipboard} alt='Clipboard' />
      <p>
        <b>Você ainda não tem tarefas cadastradas</b>
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
