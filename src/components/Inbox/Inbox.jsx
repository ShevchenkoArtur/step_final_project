import React from 'react'
import TaskInputContainer from './TaskInput/TaskInputContainer';

const Inbox = (props) => {
    return (
        <div>
            <h1 className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                <span style={{color: '#76899b', paddingRight: '10px'}} className="icon-inbox"></span>
                Входящие
            </h1>

            <TaskInputContainer />

            {
                props.inboxTasks.length > 0
                    ?
                    props.inboxTasks.map((el, idx) => <div key={idx}>{el.body}</div>)
                    :
                    <div style={{color: '#76899b'}}>Тут пока ничего нет</div>
            }
        </div>
    )
}

export default Inbox