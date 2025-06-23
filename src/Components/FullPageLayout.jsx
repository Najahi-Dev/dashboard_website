import styled from "styled-components";


function FullPageLayout({backcolor = "#181a1f", children, className}) {
    return (
        <FullPageLayoutStyle className={className} backcolor={backcolor}>
            {children}
        </FullPageLayoutStyle>
    )
}

const FullPageLayoutStyle = styled.div`
  
`;

export default FullPageLayout