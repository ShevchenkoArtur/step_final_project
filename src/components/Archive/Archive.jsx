import React from 'react';
import style from '../Task/Task.module.scss';

const Archive = props => {

    const displayTasks = () => {
        const archiveTasks = props.tasks.filter(el => el.isDone)

        if(archiveTasks.length === 0) return <div className='emptyMessage' style={{color: '#76899b'}}>Тут пока ничего нет</div>

        return archiveTasks.map((el) =>
            <div className={`taskBlock ${props.darkTheme ? 'taskBlockLight' : 'taskBlockDark'}`} key={el.id}>
                <label>
               <span style={{fontSize: '25px', color: 'green'}} className={`icon-check`}
               >
               </span>
                    <input type="checkbox" className={style.priorityCheckbox}/>
                </label>

                <textarea className={`textarea ${props.darkTheme ? 'textareaColorLight' : 'textareaColorDark'}`} value={el.body} />
            </div>
        )
    }

    const clearArchive = () => {
        props.onClearArchive()
        props.toggleNotificationFlags('isEmptyArchive')
        setTimeout(() => props.toggleNotificationFlags('isEmptyArchive'), 2000)
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h1 className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                    <span style={{color: '#76899b', paddingRight: '10px'}} className="icon-archive"></span>
                    Архив
                </h1>

                <button className='button' onClick={clearArchive}>Очистить архив</button>
            </div>
            {
               displayTasks()
            }
        </div>
    );
};

export default Archive;