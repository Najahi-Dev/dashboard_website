import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import { getColorSchemes } from "../Services";
import Button from "./Button";

function Pricing({ title, price, features = [], isMid }) {
    return (
        <PricingStyle className={`d-flex flex-column align-items-center ${isMid ? "pricing-mid-con" : ""}`}>
            <div className="title">{title}</div>
            <div className="price-container">
                <span className="price">{price}</span>
                <span className="per">Per Month</span>
            </div>
            <div className="features-container">
                {
                    features.map(({ title, text }, i) => (
                        <div className="feature">
                            <span className="icon">
                                <FaCheck />
                            </span>
                            <span className="feature-title">{title}</span>
                            <span className="feature-text">{text}</span>
                        </div>
                    ))
                }
            </div>
            {/* <Button text="Select" buttonType="style-2" className="btn-select" /> */}
        </PricingStyle>
    )
}

const PricingStyle = styled.div`
  background-color: #272c34;
  width: 350px;
  color: #ffffff;
  padding-bottom: 50px;
  border-radius: 10px;

  .btn-select{
    width: 50%;
    min-height: 15px;
    margin-top: 10px;
  }

  .title{
    font-weight: 300;
    font-size: 30px;
    margin-top: 35px;
    margin-bottom: 35px;
  }

  .price-container{
    .price{
        font-weight: bold;
        font-size: 50px;
    }
  }

  .features-container{
    width: 80%;
    margin-top: 40px;

    .feature{
        margin-bottom: 15px;

        .icon{
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            margin-right: 10px;
            background-color: #cccccc;
            color: #181a1f;
            border-radius: 100%;
        }

        .feature-title{
            font-weight: bold;
            padding-right: 8px;
        }

        .feature-text{
            line-height: 30px;
        }
    }
  }

  &.pricing-mid-con{
    background-color: ${getColorSchemes().color1.backColor};
  }
`;

function PriceList({ list = [] }) {
    return (
        <PriceListStyle className="d-flex flex-column flex-md-row gap-3">
            {
                list.map(({ title, price, features }, i) => (
                    <Pricing title={title} price={price} features={features} isMid={i == Math.floor(list.length / 2)} />
                ))
            }
        </PriceListStyle>
    )
}

const PriceListStyle = styled.div`
  
`;

export default PriceList