import React from 'react';
import style from './Project.module.scss'

const Projects = () => {
    return (
        <div className={style.projects}>
            <label>
                <input className={style.projectsCheckbox} type="checkbox"/>
                Проекты
            </label>
            <ul className={style.list}>
                <li className={style.item}>
                    <button>Добавить проект</button>
                </li>
                <li className={style.item}>универ</li>
                <li className={style.item}>школа</li>
            </ul>
        </div>
    );
};

export default Projects;