import React from 'react';

const Task = (props) => {
    return (
        <div>
            {`${props.task.isLate}`}
            <textarea value={props.task.body}/>
            <button onClick={props.moveTaskIntoBin}>
                <span className="icon-bin"></span>
            </button>
        </div>
    );
};

export default Task;