import React from 'react';
import style from './Task.module.scss'

const Task = (props) => {

    const editTaskText = (e) => {
        let id = props.task.id
        props.editTaskText(id, e.target.value)
    }
    return (
        <div>
            <label>
               <span className={
                   `${style.myCheckbox}
                    ${props.task.priority === '3' 
                       ? 
                       style.highPriority 
                       : 
                       props.task.priority === '2' 
                           ?
                           style.mediumPriority 
                           :
                           props.task.priority === '1' ? style.lowPriority : ''}
                    `}
               >
               </span>
                <input type="checkbox" className={style.priorityCheckbox} onClick={props.moveTaskIntoArchive}/>
            </label>
            {` id: ${props.task.id} priority: ${props.task.priority} `}

            <textarea value={props.task.body} onChange={editTaskText}/>

            <button onClick={props.moveTaskIntoBin}>
                <span className="icon-bin"></span>
            </button>
        </div>
    );
};

export default Task;