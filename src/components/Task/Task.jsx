import React from 'react';

const Task = (props) => {
    return (
        <div>
            <label>
               checkbox<input type="checkbox" onClick={props.moveTaskIntoArchive}/>
            </label>
            {` id: ${props.task.id} priority: ${props.task.priority} `}

            <textarea value={props.task.body}/>

            <button onClick={props.moveTaskIntoBin}>
                <span className="icon-bin"></span>
            </button>
        </div>
    );
};

export default Task;