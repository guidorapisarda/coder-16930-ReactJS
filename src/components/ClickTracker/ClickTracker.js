import React,{useState} from 'react';

export const ClickTracker = () => {
    const [contador,setContador] = useState(0);
    const [fecha,setFecha] = useState(null);

    const handleClick = () => {
        setContador (contador+1);
        setFecha(new Date().toLocaleString());
    }

    return (
        <div className="" onClick={handleClick}>
            <h2>Click Tracker</h2>
            <hr/>
            <p>Clicks: {contador}</p>
            <p>Clickeado el: {fecha}</p>
        </div>
    );
}