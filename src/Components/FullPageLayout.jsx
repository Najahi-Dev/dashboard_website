import styled from "styled-components";


function FullPageLayout({ backColor = "#181a1f", children, className, ...props }) {
    return (
        <FullPageLayoutStyle
            background={backColor}
            className={`container-fluid min-vh-100 ${className}`}
            {...props}>
            {children}
        </FullPageLayoutStyle>
    )
}

const FullPageLayoutStyle = styled.div`
  background-color: ${(props) => props.background};
`;

export default FullPageLayout