import React from 'react'
import TaskInputContainer from './TaskInput/TaskInputContainer';

const Inbox = (props) => {
    return (
        <div>
            <h1 className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                <span style={{paddingRight: '10px'}}
                      className={`icon-inbox ${props.darkTheme ? 'iconLight' : 'iconDark'}`}>
                </span>
                Новая задача
            </h1>

            <TaskInputContainer/>
        </div>
    )
}

export default Inbox