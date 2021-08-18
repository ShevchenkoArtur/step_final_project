import React from 'react'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside>
            <ul>
                <li>
                    <NavLink to='/inbox'>Входящие</NavLink>
                </li>
                <li>
                    <NavLink to="/today">Сегодня</NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar