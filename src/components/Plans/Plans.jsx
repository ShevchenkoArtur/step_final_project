import React from 'react';
import SortContainer from '../Sort/SortContainer';
import TaskApi from '../Task/TaskApi';

const Plans = (props) => {

    const displayTasks = () => {

        if (props.planTasks.length === 0) return <div className='emptyMessage' style={{color: '#76899b'}}>Тут пока ничего нет</div>

        return props.planTasks.map((el) =>
            <TaskApi key={el.id}
                     task={el}
                     getTasks={props.getTasks}
                     darkTheme={props.darkTheme}
                     editTaskText={props.editTaskText}
            />)
    }

    return (
        <div>
            <div>
                <h1 className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                    <span style={{color: '#76899b', paddingRight: '10px'}} className="icon-calendar"></span>
                    Планы <span style={{fontSize: '15px'}}></span>
                </h1>

                <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '40px'}}>
                    <SortContainer />
                </div>
            </div>

            {displayTasks()}
        </div>
    );
};

export default Plans;