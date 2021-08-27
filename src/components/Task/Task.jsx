import React from 'react';

const Task = (props) => {
    return (
        <div>
            <input type="checkbox" id='taskCheckbox'/>
            <label htmlFor="taskCheckbox">checkbox</label>
            {`${props.task.isLate}`}
            <textarea value={props.task.body}/>
            <button onClick={props.moveTaskIntoBin}>
                <span className="icon-bin"></span>
            </button>
        </div>
    );
};

export default Task;