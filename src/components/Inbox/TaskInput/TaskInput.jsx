import React from 'react';
import style from './TaskInput.module.scss'

const TaskInput = props => {

    const updateTextarea = e => props.updateTextarea(e.target.value)
    const updateCategorySelect = e => props.updateCategorySelect(e.target.value)
    const updatePrioritySelect = e => props.updatePrioritySelect(e.target.value)

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
                <option value="category" selected hidden>Категории</option>
                <option value="today">Сегодня</option>
            </select>

            <select value={props.prioritySelect.value} onChange={updatePrioritySelect}>
                <option value="priority" selected hidden>Приоритет</option>
                <option value="3">Флаг1</option>
                <option value="2">Флаг2</option>
                <option value="1">Флаг3</option>
                <option value={null}>Обычный</option>
            </select>

            <button onClick={addTask}>Добавить</button>
        </div>
    );
};

export default TaskInput;