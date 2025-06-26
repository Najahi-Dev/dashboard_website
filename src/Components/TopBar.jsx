import styled from "styled-components";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Button from "./Button";


function TopBar() {

    const getNavList = () => {
        return [
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
        ]
    }

    return (
        <TopBarStyle className="d-flex justify-content-between pt-5 ps-5 pe-5">
            <Logo text="Dash Box" />
            <Navigation list={getNavList()} />
            <Button text="Login" buttonType="style-2"/>
        </TopBarStyle>
    )
}

const TopBarStyle = styled.div`
  
`;

export default TopBar

