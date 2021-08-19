import React from 'react'

const Today = props => {
    return (
        <div>
            <h1 className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                <span style={{color: '#76899b', paddingRight: '10px'}} className="icon-star"></span>
                Сегодня
            </h1>
            {
                props.todayTasks.length > 0
                    ?
                    <div>есть</div>
                    :
                    <div style={{color: '#76899b'}}>Тут пока ничего нет</div>
            }
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis
                quidem quis.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore
            perferendis perspiciatis quidem quis.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Facilis fugiat labore perferendis perspiciatis quidem quis.</p><p>Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Facilis fugiat labore perferendis perspiciatis quidem quis.</p><p>Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis quidem quis.</p><p>Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis perspiciatis quidem
            quis.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat labore perferendis
            perspiciatis quidem quis.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat
            labore perferendis perspiciatis quidem quis.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Facilis fugiat labore perferendis perspiciatis quidem quis.</p>


        </div>
    )
}

export default Today