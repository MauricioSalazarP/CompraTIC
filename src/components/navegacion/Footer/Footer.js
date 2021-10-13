import React from 'react'
import './Footer.css';

const Footer = ({ value }) => {
    
    console.log({value})
    // const divStyle = {
    //     backgroundImage: 'url(' + imgUrl + ')',
    //   };
    
    return (
        <footer style={value}>
            <h5>CompraTic 2021</h5>
        </footer>
    )
}

export default Footer;
