import styled from "styled-components";
import FullPageLayout from '../Components/FullPageLayout'
import TopBar from '../Components/TopBar'
import Image from '../Components/Image'
import image from '../assets/how_pic.svg'
import Typography from '../Components/Typography'


function HowItWorksPage() {
    return (
        <HowItWorksPageStyle>
            <FullPageLayout className="d-flex flex-column">
                <TopBar />
                <div className="body-container d-flex flex-grow-1 align-items-center">
                    <div className="row col-lg-12 d-flex justify-content-center p-5">
                        <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-center mt-sm-5">
                            <Image src={image} xxlSize={"85%"} xlSize={"90%"} mdSize={"90%"} />
                        </div>
                        <div class="col-lg-6 col-md-12 ps-5 mt-sm-5 d-flex flex-column justify-content-center">
                            <Typography text="Organize Your Files" type="h2" className="col-lg-8" />
                            <Typography text="Our intutive file management system allows you to easily organize youur files with a few simple clicks. Create folders, subfolders and categorize your files to keep everything in order. Use tags and search functions to quickly find what you need." type="p" color="#788199" className="col-lg-12 mt-3" />

                            <Typography text="Keep Them Safe" type="h2" className="col-lg-8" />
                            <Typography text="Your files are securly stored with our advanced encryption technology, ensuring that only you have access to them. Regular backups and redundancy are also in place to protect your data in case of a data breach." type="p" color="#788199" className="col-lg-12 mt-3" />

                            
                            <Typography text="Access Everywhere" type="h2" className="col-lg-8" />
                            <Typography text="With our cloud-based solution, you can access your files from any devices, anywhere in the world." type="p" color="#788199" className="col-lg-12 mt-3" />
                        </div>
                    </div>
                </div>
            </FullPageLayout>
        </HowItWorksPageStyle>
    )
}

const HowItWorksPageStyle = styled.div`

`;

export default HowItWorksPage