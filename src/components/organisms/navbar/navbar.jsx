import React from "react"
import { useRef } from "react";

function Navbar () { 
    
    const ref = useRef(null)

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth'});
    }

    return (
        <div className="navbar">Nav
    <button onClick={handleClick}>Start</button>
    <button onClick={handleClick}>What's it?</button>
    <button onClick={handleClick}>About us</button>
    <button onClick={handleClick}>Foundations and organisations</button>
    <button onClick={handleClick}>Contact</button>
        </div>
    )
}

export default Navbar