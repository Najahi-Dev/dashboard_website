import { Link, Links } from "react-router-dom";
import styled from "styled-components";
import React from "react";


function Navigation({list = [], className , ...props}) {
    return (
        <NavigationStyle {...props} className={`${className}`}>
            <section className="d-flex">
                {
                    list.map(({ path, text }, i) => (
                        <Link to={path} key={i}>{text}</Link>
                    ))
                }
            </section>
        </NavigationStyle>
    )
}

const NavigationStyle = styled.div`
  
`;  

export default Navigation