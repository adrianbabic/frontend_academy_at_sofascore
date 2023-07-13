import NavBar from "@/components/NavBar/NavBar";
import { CenteredContainer, GlobalMainViewStyle, InnerContainer, InnerText } from "../../styles/main-view.styles";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";


export default function About() {
    
    const [selectedSportSlug, setSelectedSportSlug] = useState<String | null>(null);

    const handleSelectedSportSlugChange = (slug: String) => {
        setSelectedSportSlug(slug);
    };
    
    return (
        <div>
            <GlobalMainViewStyle/>
            <NavBar
                selectedSportSlug={selectedSportSlug}
                onSelectedSportSlugChange={handleSelectedSportSlugChange}
            />
            <CenteredContainer>
                <InnerContainer>
                    <InnerText>
                        This app was made by Adrian Babić. Contact: adrianbabic30@gmail.com
                    </InnerText>
                </InnerContainer>
            </CenteredContainer>

            <Footer/>
        </div>
    );
}