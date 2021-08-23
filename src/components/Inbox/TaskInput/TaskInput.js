import React from 'react';
import style from './TaskInput.module.scss'

const TaskInput = props => {

    const updateTextarea = e => props.updateTextarea(e.target.value)
    const updateSelect = e => props.updateSelect(e.target.value)

    const addTask = () => {
        props.addTask()
    }

    return (
        <div className={style.addTaskBlock}>
            <textarea className={`${style.textarea}`} placeholder='Новая задача' value={props.textarea.value}
                      onChange={updateTextarea}
            />

            <select className={style.select}
                    value={props.select.value}
                    onChange={updateSelect}
            >
                <option value="inbox">Входящие</option>
                <option value="today">Сегодня</option>
            </select>
            <button onClick={addTask}>Добавить</button>
        </div>
    );
};

export default TaskInput;