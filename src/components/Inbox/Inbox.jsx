import React from 'react'

const Inbox = (props) => {
    return (
        <div>
            <h1>Входящие</h1>
            {
                props.inboxTasks.length > 0
                    ?
                    <div>Есть</div>
                    :
                    <div>Тут пока ничего нет</div>
            }
        </div>
    )
}

export default Inbox