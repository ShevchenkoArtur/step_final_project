import React from 'react'
import style from './Sidebar.module.scss'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className={style.sidebar}>
            <ul>
                <li>
                    <NavLink to='/inbox'>Входящие</NavLink>
                </li>
                <li>
                    <NavLink to="/">Сегодня</NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar