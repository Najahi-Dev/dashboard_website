import styled from "styled-components";
import AppCircle from "../Components/AppCircle";
import { useState } from "react";
import '../App.css'
import FullPageLayout from "../Components/FullPageLayout";


function HomePage() {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setPosition({ x: clientX, y: clientY });
    }


    return (
        <HompePageStyle className="App" onMouseMove={handleMouseMove}>
            <AppCircle x={position.x} y={position.y} />
            <FullPageLayout>
                
            </FullPageLayout>
        </HompePageStyle>
    )
}

const HompePageStyle = styled.div`
  
`;

export default HomePage