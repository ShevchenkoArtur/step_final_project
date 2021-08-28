import React from 'react';

const Sort = (props) => {
    const sortBy = (e) => {
        props.updateCategorySelect(e.target.value)
        props.sortArrBy(e.target.value)
    }

    return (
        <div>
            <select value={props.categorySelect.value} onChange={sortBy}>
                <option value='byPriority'>По приоритету</option>
                <option value='backToPriority'>Обратно приоритету</option>
            </select>
        </div>
    );
};

export default Sort;