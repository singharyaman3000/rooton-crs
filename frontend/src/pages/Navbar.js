import React from 'react';
import { Link} from "react-router-dom";
import "./Register.css";
const Navbar = () => {
    return (
        <div>
            <ul style={{padding:"30px",listStyle:"none",textAlign:"center",margin:"30px",background:"#d2d4f3",border:"3px solid grey",display:"flex",justifyContent:"center"}}>
            <li style={{padding:"10px",border:"5px solid blue",background:"darkblue",margin:"5px",}}><Link to="/clg" >College Registration</Link></li>
            <li style={{padding:"10px",border:"5px solid blue",background:"darkblue",margin:"5px"}}><Link to="/main">Student Registration</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
