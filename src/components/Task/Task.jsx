import React from 'react';

const Task = (props) => {

    const deleteTask = (id) => {
        props.deleteTask(props.task.id)
        props.gg(props.task.id)
    }

    return (
        <div>
            {props.task.body}
            <button onClick={deleteTask}>
                <span className="icon-bin"></span>
            </button>
        </div>
    );
};

export default Task;