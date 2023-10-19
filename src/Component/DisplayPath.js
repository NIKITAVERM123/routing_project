import React, { useState } from 'react';

function DisplayPath() {
    const [time, setTime] = useState("");

    const handleClick = () => {
        const currentTime = new Date().toLocaleTimeString();
        setTime(currentTime);
    };

    return (
        <div>
            <button onClick={handleClick}>submit</button>
            <p>Now Time Is:{time}</p> 
        </div>
    );
}

export default DisplayPath;