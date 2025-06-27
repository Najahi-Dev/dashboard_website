import styled from "styled-components";
import TopBar from "../Components/TopBar";
import Typography from '../Components/Typography'
import FullPageLayout from '../Components/FullPageLayout';
import PriceList from "../Components/PriceList";


function PricingPage() {


    const getPricingList = [
        {
            title: "Basic Plan",
            price: "$5",
            features: [
                {
                    title : "Storage",
                    text : "50 GB"
                },
                {
                    title : "File Share",
                    text : "Up to 5 users"
                },
                {
                    title : "Security",
                    text : "Basic"
                },
                {
                    title : "Support",
                    text : "Email support"
                },
                {
                    title : "Backup",
                    text : "Daily"
                },
                {
                    title : "Collaboration",
                    text : "Basic"
                },
            ]
        },
        {
            title: "Standard Plan",
            price: "$15",
            features: [
                {
                    title : "Storage",
                    text : "100 GB"
                },
                {
                    title : "File Share",
                    text : "Up to 10 users"
                },
                {
                    title : "Security",
                    text : "Standard"
                },
                {
                    title : "Support",
                    text : "Email support"
                },
                {
                    title : "Backup",
                    text : "Daily"
                },
                {
                    title : "Collaboration",
                    text : "Basic"
                },
            ]
        },
        {
            title: "Premium Plan",
            price: "$25",
            features: [
                {
                    title : "Storage",
                    text : "200 GB"
                },
                {
                    title : "File Share",
                    text : "Up to 20 users"
                },
                {
                    title : "Security",
                    text : "Premium"
                },
                {
                    title : "Support",
                    text : "Email support"
                },
                {
                    title : "Backup",
                    text : "Daily"
                },
                {
                    title : "Collaboration",
                    text : "Premium"
                },
            ]
        },
    ]

    return (
        <PricingPageStyle>
            <FullPageLayout className="d-flex flex-column">
                <TopBar />
                <div className="body-container d-flex flex-grow-1 align-items-center justify-content-center">
                    <div className="pricing-container">
                        <Typography text="Pricing Plan" type="h3" />
                        <PriceList list={getPricingList} />
                    </div>
                </div>
            </FullPageLayout>
        </PricingPageStyle>
    )
}

const PricingPageStyle = styled.div`

`;

export default PricingPage