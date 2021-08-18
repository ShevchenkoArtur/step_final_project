import React from 'react'

const Inbox = (props) => {
    return (
        <div>
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