import styled from "styled-components";
import FullPageLayout from "../Components/FullPageLayout";
import TopBar from "../Components/TopBar";
import Typography from '../Components/Typography'
import AppAccordion from "../BootstrapComponents/AppAccordion";


function FAQPage() {

    const getFAQList = () => {
        return [
            {
                header: "What is a file storage system?",
                body: "A file storage system is a way of storing data in the form of files, organized within directories or folders. Think of it like your computer's file explorer — but for an app, cloud, or server."
            },
            {
                header: "What's the difference between file, block, and object storage?",
                body: "File storage saves data as whole files with paths. Block storage breaks it into raw chunks, optimized for databases. Object storage saves it as metadata-packed blobs — perfect for cloud-scale media or backups."
            },
            {
                header: "How does file storage handle access and permissions?",
                body: "Local: NTFS, ext4, APFS. Networked: NFS, SMB. Cloud: AWS EFS, Azure Files, Google Filestore. Each has trade-offs on speed, scalability, and integration."
            },
            
        ]
    }

    return (
        <FAQPageStyle>
            <FullPageLayout className="d-flex flex-column">
                <TopBar/>
                <div className="body-container flex-grow-1 d-flex align-items-center justify-content-center">
                    <div className="faq-container">
                        <Typography text="Frequently Asked Questions (FAQs)" type="h3" />
                        <AppAccordion list={getFAQList()}/>
                    </div>
                </div>
            </FullPageLayout>
        </FAQPageStyle>
    )
}

const FAQPageStyle = styled.div`

`;

export default FAQPage