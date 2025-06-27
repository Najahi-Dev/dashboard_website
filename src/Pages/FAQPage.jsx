import styled from "styled-components";
import FullPageLayout from "../Components/FullPageLayout";
import TopBar from "../Components/TopBar";


function FAQPage() {
    return (
        <FAQPageStyle>
            <FullPageLayout>
                <TopBar/>
            </FullPageLayout>
        </FAQPageStyle>
    )
}

const FAQPageStyle = styled.div`

`;

export default FAQPage