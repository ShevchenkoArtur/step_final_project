import React from 'react';
import style from './Task.module.scss'

const Task = (props) => {

    const editTaskText = (e) => {
        let id = props.task.id
        props.editTaskText(id, e.target.value)
    }

    return (
        <div className={`${style.taskBlock} ${props.darkTheme ? style.taskBlockLight : style.taskBlockDark}`}>
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

            <textarea className={`textarea ${props.darkTheme ? 'textareaColorLight' : 'textareaColorDark'}`} value={props.task.body} onChange={editTaskText}/>

            <button onClick={props.moveTaskIntoBin}>
                <span className="icon-bin"></span>
            </button>
        </div>
    );
};

export default Task;