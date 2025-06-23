import styled from "styled-components";
import Logo from "./Logo";


function TopBar() {
    return (
        <TopBarStyle>
            <Logo text="Dash Box" />
        </TopBarStyle>
    )
}

const TopBarStyle = styled.div`
  
`;

export default TopBar

