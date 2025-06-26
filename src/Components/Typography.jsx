import styled from "styled-components";
import { media } from "../Services";


const H1 = styled.h1`
  color: ${(props) => props.color};
  font-size: 48px;
  font-weight: 700;
  line-height: 62px;
  font-family: "DM Sans", sans-serif;
  /* user-select: none; */


  @media ${media.md}{
    font-size: 35px;
  }
`;

const H2 = styled.h2`
  color: ${(props) => props.color};
  font-size: 38px;
  font-weight: 700;
  line-height: 52px;
  font-family: "DM Sans", sans-serif;


  @media ${media.md}{
    font-size: 30px;
  }
`;

const H3 = styled.h3`
  color: ${(props) => props.color};
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  font-family: "DM Sans", sans-serif;


  @media ${media.md}{
    font-size: 23px;
  }
`;

const H4 = styled.h4`
  color: ${(props) => props.color};
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  font-family: "DM Sans", sans-serif;


  @media ${media.md}{
    font-size: 20px;
  }
`;

const H5 = styled.h5`
  color: ${(props) => props.color};
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  font-family: "DM Sans", sans-serif;


  @media ${media.md}{
    font-size: 15px;
  }
`;

const P = styled.p`
  color: ${(props) => props.color};
  font-size: 20px;
  line-height: 26px;
  font-family: "DM Sans", sans-serif;


  @media ${media.md}{
    font-size: 15px;
  }
`;



function Typography({ text, type = "p", color = "#ffffff", ...props }) {


    const getElement = () => {

        let element;

        switch (type) {
            case "h1":
                element = (<H1 color={color} {...props}>
                    {text}
                </H1>);
                break;
            case "h2":
                element = <H2 color={color} {...props}>
                    {text}
                </H2>
                break;
            case "h3":
                element = <H3 color={color} {...props}>
                    {text}
                </H3>
                break;
            case "h4":
                element = <H4 color={color} {...props}>
                    {text}
                </H4>
                break;
            case "h5":
                element = <H5 color={color} {...props}>
                    {text}
                </H5>
                break;
            default:
                element = <P color={color} {...props}>
                    {text}
                </P>
                break;
        }

        return element;
    }

    return getElement();

}



export default Typography