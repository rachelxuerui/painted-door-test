import { useState } from "react";

const Popup = ({ submitPopup }) => {
    const [ isOpen, setOpen ] = useState(true); /*initial state*/
    /*const [ accept, setAccept ] = useState('');*/

    return ( isOpen &&
        <>
            <div className = "bg">
                <div className = "text">
                <div className="header">Get the Columbia Daily Spectator mobile app </div>
                <div className="body">All the Columbia news you love, pocket edition.</div>
                
            <div className="buttons">
            <button className="decline" onClick={() => setOpen(false)}>No thanks</button>
            <button className="accept" onClick={() => submitPopup()}>Download now</button>
            </div>
            </div>
            </div>
        </>
    )
};

export default Popup;