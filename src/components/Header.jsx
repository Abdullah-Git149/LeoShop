import React from 'react';
import Typed from "react-typed"

function Header() {
    return (
        <div className="banner">
       
            <div className="header">
                <Typed
                    className="typed__data"
                    strings={["Happiness in not in money but in Shopping",
                    "Stay Home and shop online",
                    "Shopping is the best medicine"]} 
                    typeSpeed={20}
                    backSpeed={25}
                    loop/>
            </div>
        </div>
    );
}

export default Header;