import { Link, Links, useLocation } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";
import { getColorSchemes, media } from "../Services";
import { BiMenu } from "react-icons/bi";


function Navigation({ list = [], className, ...props }) {

    const [isClicked, setIsClicked] = useState(false);
    const location = useLocation();

    return (
        <NavigationStyle {...props} className={` d-flex flex-md-grow-0 justify-content-sm-end flex-sm-grow-1 ${className}`}>
            <section className="d-flex justify-content-center align-items-center gap-lg-5 gap-md-3 d-none d-md-block">
                {
                    list.map(({ path, text }, i) => (
                        <Link className={`navigation-link ${location.pathname == path ? "active":""}`} to={path} key={i}>{text}</Link>
                    ))
                }
            </section>



            <button className="d-block d-md-none nav-sm-button" onClick={() => setIsClicked(prev => !prev)} >
                <BiMenu />
            </button>

            <nav className={`d-block d-md-none small-device-nav-container ${isClicked ? "d-flex":"d-none"}`}>
                {
                    list.map(({ path, text }, i) => (
                        <Link className={`navigation-sm-link ${location.pathname == path ? "active" : ""}`} to={path} key={i}>{text}</Link>
                    ))
                }
            </nav>
        </NavigationStyle>
    )
}

const NavigationStyle = styled.div`
  position: relative;
  

  .navigation-link,.navigation-sm-link{
    text-decoration: none;
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    cursor: pointer;
    margin: 0 10px;
    font-size: 24px;
    line-height: 35px;


    @media ${media.md}{
        font-size: 20px;
    }
  }

  .navigation-link{
    font-size: 24px;
    color: #ffffff;

    &:hover{
        opacity:  0.7;
    }
  }

  .nav-sm-button{
    background-color: transparent;
    border: none;
    color: white ;
    font-size: 35px ;
    cursor: pointer;
  }

  .active{
    color: ${getColorSchemes().color1.backColor};
  }

  .navigation-sm-link{
    color: black ;
    font-size: 14px ;
    display: block;

    &:hover{
        opacity: 0.7 ;
        /* color: white; */

    }
  }

  .small-device-nav-container{
    position: absolute ;
    top: 50px;
    display: flex ;
    flex-direction: column;
    width: 200px;
    background-color: #f6f6f6;
    border-radius: 3px;
  }
`;

export default Navigation