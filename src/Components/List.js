
import React from 'react';

const List = (props) => {
    const { tasks} = props;

    // handleToggle = (e) => {
        
    // }

    return(
        <div>
             <ul>
                {tasks.map((task) => {
                    return <li key={task.id}>{task.text}
                    </li>
                })}
            </ul>
        </div>
    )
}


export default List;