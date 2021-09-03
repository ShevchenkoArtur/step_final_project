import React from 'react'
import style from './Sidebar.module.scss'
import SidebarHeader from './SidebarHeader/SidebarHeader';
import SidebarMenu from './SidebarMenu/SidebarMenu';
import Notification from '../Notification/Notification';

const Sidebar = props => {
    return (
        <aside
            className={`${style.sidebar} 
                        ${props.darkTheme ? style.sidebarBackgroundLight : style.sidebarBackgroundDark}`}
        >
            <SidebarHeader darkTheme={props.darkTheme}/>
            <SidebarMenu darkTheme={props.darkTheme}
                         tasks={props.tasks}
                         todayTasks={props.todayTasks}
                         planTasks={props.planTasks}
                         notification={props.notification}
            />
        </aside>
    )
}

export default Sidebar