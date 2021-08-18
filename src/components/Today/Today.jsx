import React from 'react'

const Today = (props) => {
    return (
        <div>
            <h1>Сегодня</h1>
            {
                props.todayTasks.length > 0
                    ?
                    <div>есть</div>
                    :
                    <div>Тут пока ничего нет</div>
            }
        </div>
    )
}

export default Today