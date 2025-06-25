import styled from "styled-components";
import Logo from "./Logo";
import Navigation from "./Navigation";


function TopBar() {
    return (
        <TopBarStyle>
            <Logo text="Dash Box" />
            <Navigation list={[
                {
                    path: "/",
                    text: "Home"
                },
                {
                    path: "/work",
                    text: "How It Work"
                },
                {
                    path: "/faq",
                    text: "FAQ"
                },
                {
                    path: "/pricing",
                    text: "Pricing"
                },
            ]} />
        </TopBarStyle>
    )
}

const TopBarStyle = styled.div`
  
`;

export default TopBar

