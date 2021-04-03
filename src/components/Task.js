import React, { useContext , useState} from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
 
const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)
  const [isdone, setIsDone] = useState(false);
  function checked(){
    setIsDone((prevValue) => {
    return !prevValue
  })
}
  return (
    <li className="list-item">
      <span  onClick={checked} style={{textDecoration:isdone?"line-through":"none",color:isdone?"yellow":"white",borderBottomColor:isdone?"red":"rgb(221, 221, 108)"}}>{task.title} </span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>{' '}
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  )
}

export default Task