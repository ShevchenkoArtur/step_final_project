import React from 'react'
import TaskInputContainer from './TaskInput/TaskInputContainer';

const Inbox = (props) => {

    const displayTasks = () => {
        const inboxTasks = props.tasks.filter(el => el.category === 'inbox' && !el.inBin)

        if(inboxTasks.length === 0) return <div style={{color: '#76899b'}}>Тут пока ничего нет</div>

        return inboxTasks.map((el, idx) =>
            <div key={el.id} className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                <p>id: {el.id}</p>
                <p>body: {el.body}</p>
                <p>category: {el.category}</p>
            </div>)
    }

    return (
        <div>
            <h1 className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                <span style={{color: '#76899b', paddingRight: '10px'}} className="icon-inbox"></span>
                Входящие
            </h1>

            <TaskInputContainer />

            {
                displayTasks()
            }
        </div>
    )
}

export default Inbox