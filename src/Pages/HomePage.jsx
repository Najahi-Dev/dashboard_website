import styled from "styled-components";
import AppCircle from "../Components/AppCircle";
import { useState } from "react";
import '../App.css'
import FullPageLayout from "../Components/FullPageLayout";
import TopBar from "../Components/TopBar";
import Typography from "../Components/Typography";
import Button from "../Components/Button";
import { FaPlay } from "react-icons/fa";
import Image from "../Components/Image";
import image from "../assets/file_image.svg"


function HomePage() {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setPosition({ x: clientX, y: clientY });
    }


    return (
        <HompePageStyle className="App" onMouseMove={handleMouseMove}>
            {/* <AppCircle x={position.x} y={position.y} /> */}
            <FullPageLayout className="d-flex flex-column">
                <TopBar />
                <div className="body-container d-flex flex-grow-1 align-items-center">
                    <div className="col-lg-12 p-5 d-flex justify-content-center">
                        <div className="row">
                            <div class="col-lg-6 col-md-12 ps-5 d-flex flex-column justify-content-center">
                                <Typography text="Organize your files and keep them safe, everywhere!" type="h1" className="col-lg-8 heading-1" />

                                <Typography text="We offer secure storage, ensuring all your data is protected from unauthorized access." type="p" color="#788199" className="col-lg-8 mt-3" />

                                <div className="button-container d-flex gap-3 mt-5">
                                    <Button text="Get Started" buttonType="style-1" />
                                    <Button text="Request a Demo" buttonType="style-3" icon={<FaPlay />} className="me-3 gap-3" />
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12 d-flex justify-content-center align-items-center mt-sm-5">
                                <Image src={image} alt="file-image" xxlSize={"85%"} xlSize={"90%"} mdSize={"90%"} />
                            </div>
                        </div>
                    </div>

                </div>
            </FullPageLayout>
        </HompePageStyle>
    )
}

const HompePageStyle = styled.div`
  
`;

export default HomePage