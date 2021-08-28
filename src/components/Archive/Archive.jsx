import React from 'react';
import TaskApi from "../Task/TaskApi";

const Archive = props => {

    const displayTasks = () => {
        const archiveTasks = props.tasks.filter(el => el.isDone)

        if(archiveTasks.length === 0) return <div style={{color: '#76899b'}}>Тут пока ничего нет</div>

        return archiveTasks.map((el) =>
            <TaskApi key={el.id}
                     task={el}
                     editTaskText={props.editTaskText}
                     getTasks={props.getTasks}
            />
        )
    }

    return (
        <div>
            <h1 className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                <span style={{color: '#76899b', paddingRight: '10px'}} className="icon-archive"></span>
                Архив
            </h1>
            {
               displayTasks()
            }
        </div>
    );
};

export default Archive;