import React from 'react';
import style from './TaskInput.module.scss'

const TaskInput = props => {

    const updateTextarea = e => props.updateTextarea(e.target.value)
    const updateCategorySelect = e => props.updateCategorySelect(e.target.value)

    const changePriority = e => props.changePriority(e.target.value)

    const addTask = () => {
        props.addTask()
    }

    return (
        <div className={`${style.addTaskBlock} ${props.darkTheme ? style.addTaskBlockLight : style.addTaskBlockDark}`}>
            <textarea className={`${style.textarea} 
                                ${props.darkTheme ? style.textareaColorLight : style.textareaColorDark}`}
                      placeholder='Новая задача' value={props.textarea.value}
                      onChange={updateTextarea}
            />

            <select className={style.select}
                    value={props.categorySelect.value}
                    onChange={updateCategorySelect}
            >
                <option value="inbox">Входящие</option>
                <option value="today">Сегодня</option>
            </select>

            <div onClick={changePriority}>
                Приоритет<br />
                <label>3<input name='priority' type="radio" value={props.priority.highValue}/></label>
                <label>2<input name='priority' type="radio" value={props.priority.mediumValue}/></label>
                <label>1<input name='priority' type="radio" value={props.priority.lowValue}/></label>
            </div>

            <button onClick={addTask}>Добавить</button>
        </div>
    );
};

export default TaskInput;