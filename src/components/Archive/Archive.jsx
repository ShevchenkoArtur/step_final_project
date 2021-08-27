import React from 'react';

const Archive = props => {

    const displayTasks = () => {
        const archiveTasks = props.tasks.filter(el => el.isDone)

        if(archiveTasks.length === 0) return <div style={{color: '#76899b'}}>Тут пока ничего нет</div>

        return archiveTasks.map((el, idx) =>
            <div key={idx}>
                <p>id: {el.id}</p>
                <p>body: {el.body}</p>
                <p>category: {el.category}</p>
            </div>)
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