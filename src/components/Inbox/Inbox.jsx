import React from 'react'
import TaskInputContainer from './TaskInput/TaskInputContainer';

const Inbox = (props) => {
    return (
        <div>
            <h1 className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                <span style={{color: '#76899b', paddingRight: '10px'}} className="icon-inbox"></span>
                Новая задача
            </h1>

            <TaskInputContainer />
        </div>
    )
}

export default Inbox