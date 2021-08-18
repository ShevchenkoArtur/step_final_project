import React from 'react'

const Today = (props) => {
    return (
        <div>
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