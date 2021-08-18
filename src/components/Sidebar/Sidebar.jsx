import React from 'react'
import style from './Sidebar.module.scss'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className={`${style.sidebar} ${style.sidebarBackgroundDark}`}>
            <ul className={`${style.list}`}>
                <li className={`${style.item}`}>
                    <NavLink className={`${style.link}`} to='/inbox'>Входящие</NavLink>
                </li>
                <li>
                    <NavLink to="/">Сегодня</NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar