import React, { useState } from 'react';
import { getImageUrl } from './utils.js';

const Panel = ({ children }) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <button onClick={handleToggle}>{expanded ? 'Collapse' : 'Expend'}</button>
            {expanded && (
                <div>
                    {React.Children.map(children, child => React.cloneElement(child, { expanded }))}
                </div>
            )}
        </div>
    );
};

export default Panel;
