import React from 'react';

const Bin = props => {
    const displayTasks = () => {

        if (props.binTasks.length === 0) return <div style={{color: '#76899b'}}>Тут пока ничего нет</div>

        return props.binTasks.map((el, idx) =>
            <div key={idx}>
                <p>id: {el.id}</p>
                <p>body: {el.body}</p>
                <p>category: {el.category}</p>
                <p>inBin: {el.inBin}</p>
            </div>)
        //
        // const binTasks = props.tasks.filter(el => el.inBin)
        // if (binTasks.length === 0) return <div style={{color: '#76899b'}}>Тут пока ничего нет</div>
        // return binTasks.map((el, idx) =>
        //     <div key={idx}>
        //         <p>id: {el.id}</p>
        //         <p>body: {el.body}</p>
        //         <p>category: {el.category}</p>
        //         <p>inBin: {el.inBin}</p>
        //     </div>)
    }

    return (
        <div>
            <h1 className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                <span style={{color: '#76899b', paddingRight: '10px'}} className="icon-bin"></span>
                Корзина
            </h1>
            {
                displayTasks()
            }
        </div>
    );
};

export default Bin;

