import react, {useState} from 'react';
import trashIcon from './trash.svg'



function App() {
  const [taskInput, updateTaskInput] = useState('');
  const [toDoList, updateToDoList] = useState([]);

  const inputKeyDown = (e) => {
    if (e.keyCode === 13)
    addTask();
  }

  const addTask = () => {
     toDoList.push({ description: taskInput, isDone: false })
     updateToDoList(toDoList)
     updateTaskInput("")
  }

  const deleteTask =(index) => {
    const newList = toDoList.filter((item,id)=> id!==index);
    updateToDoList(newList);
  }

  const completeTask =(index) => {
    const list=[...toDoList];
    list[index].isDone = true;
    updateToDoList(list);
  }



  return (
    <div className='app-background' >
       <p className='heading-text'>React To Do List</p>
       <div className="task-container">
         <div>
           <input className="text-input" value={taskInput} onKeyDown={inputKeyDown}
           onChange={(e) => updateTaskInput(e.target.value)}/>
           <button className="add-button" onClick={addTask}>ADD</button>
         </div>
         {toDoList?.length ? toDoList.map((toDoObject,index) => 

         <ListItem index={index} itemData={toDoObject} 
         deleteTask={deleteTask} completeTask={completeTask}/>) :

         <p className="no-item-text">No Task Added !</p>}
         
       </div>
       <p className='footer-text'>Go My Code</p>
    </div>
  ); 
}

function ListItem(props){
  return (
    <div className='list-item row jc-space-between'>
      <span className={props.itemData.isDone ? 'task-complete' : ''}
        onClick={()=>props.completeTask(props.index)} >
        {props.itemData.description}
      </span>

      <img src={trashIcon} alt='' 
          className='delete-icon' 
          onClick={() => props.deleteTask(props.index)}
      />

    </div>
  )
}

export default App;
