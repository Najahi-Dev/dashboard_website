import styled from "styled-components";


function IconCombo({list = [], className, ...props}) {
    return (
        <IconComboStyle {...props} className={` d-flex mt-5 gap-5 ${className}`}>

        </IconComboStyle>
    )
}

const IconComboStyle = styled.div`

  
`;

export default IconCombo