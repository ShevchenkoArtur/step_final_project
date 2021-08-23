import React from 'react'
import style from './Sidebar.module.scss'
import SidebarHeader from './SidebarHeader/SidebarHeader';
import SidebarMenu from './SidebarMenu/SidebarMenu';

const Sidebar = props => {
    return (
        <aside
            className={`${style.sidebar} 
                        ${props.darkTheme ? style.sidebarBackgroundLight : style.sidebarBackgroundDark}`}
        >
            <SidebarHeader darkTheme={props.darkTheme}/>
            <SidebarMenu darkTheme={props.darkTheme}
                         todayTasks={props.todayTasks}
                         inboxTasks={props.inboxTasks}
                         archiveTasks={props.archiveTasks}
                         binTasks={props.binTasks}
            />
        </aside>
    )
}

export default Sidebar