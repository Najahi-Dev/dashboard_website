import { Link, Links } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import { media } from "../Services";


function Navigation({ list = [], className, ...props }) {
    return (
        <NavigationStyle {...props} className={` d-flex flex-md-grow-0 justify-content-sm-end flex-sm-grow-1 ${className}`}>
            <section className="d-flex justify-content-center align-items-center gap-lg-5 gap-md-3 d-none d-md-block">
                {
                    list.map(({ path, text }, i) => (
                        <Link className="navigation-link" to={path} key={i}>{text}</Link>
                    ))
                }
            </section>



            <button>
                
            </button>
        </NavigationStyle>
    )
}

const NavigationStyle = styled.div`
  position: relative;
  

  .navigation-link{
    text-decoration: none;
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    cursor: pointer;
    margin: 0 10px;
    font-size: 24px;


    @media ${media.md}{
        font-size: 20px;
    }
  }

  .navigation-link{
    font-size: 24px;
    /* color: #ffffff; */

    &:hover{
        opacity:  0.7;
    }
  }
`;

export default Navigation