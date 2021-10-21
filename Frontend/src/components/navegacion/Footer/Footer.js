import React from 'react'
import './Footer.css';
import compra from "../../../../src/assets/images/logo3.png"; 

const Footer = ({ value }) => {
    
    console.log({value})
 //    const divStyle = {
 //        backgroundImage: 'url(' + './public/CompraTICLogoNegroMorA' + ')',
 //      };
    
    return (
        <footer style={value}>
            <img 
            src = {compra}
            /> 
        </footer>
    )
}

export default Footer;
