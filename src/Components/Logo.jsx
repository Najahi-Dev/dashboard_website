import styled from "styled-components";
import { BsFillBoxFill } from "react-icons/bs";
import { getColorSchemes } from "../Services";


function Logo({ text = "App Name", className, ...props }) {
    return (
        <LogoStyle
            className={`d-flex align-items-center gap-3 ${className}`}
            {...props}>
            <BsFillBoxFill className="logo" />
            <div className="logo-text">{text}</div>
        </LogoStyle>
    )
}

const LogoStyle = styled.div`
  .logo{
    color: ${getColorSchemes().color1.backColor};
    font-size: 40px;
  }

  .logo-text{
    color: ${getColorSchemes().color1.color};
    font-size: 35px;
    font-weight: 700;
    user-select: none;
    /* font-family: "DM Mono", monospace; */
    font-family: "DM Sans", sans-serif;
  }
`;

export default Logo