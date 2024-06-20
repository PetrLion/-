import React, { useState } from 'react';

const Info = ({ item }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <h3>{item.title}</h3>
            <button onClick={() => setExpanded(!expanded)}>
                {expanded ? 'Hide Details' : 'Show Details'}
            </button>
            {expanded && <p>{item.details}</p>}
        </div>
    );
};

export default Info;
