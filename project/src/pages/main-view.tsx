import NavBar from "@/components/NavBar/NavBar";
import { CenteredContainer, GlobalMainViewStyle, InnerContainer, InnerContainerNoPadding, InnerText } from "../../styles/main-view.styles";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";
import TournamentsList from "@/components/TournamentsList/TournamentsList";
import EventsList from "@/components/EventsList/EventsList";
import EventDetails from "@/components/EventDetails/EventDetails";
import { EventModel } from '@/model/EventModel';


export default function MainView() {
    
    const [selectedSportSlug, setSelectedSportSlug] = useState<String | null>(null);
    const [selectedTournamentId, setSelectedTournamentId] = useState<number | null>(null);
    const [selectedEvent, setSelectedEvent] = useState<EventModel | null>(null);

    const handleSelectedSportSlugChange = (slug: String) => {
        setSelectedSportSlug(slug);
    };

    const handleSelectedTournamentChange = (tournamentId: number) => {
        setSelectedTournamentId(tournamentId);
    };

    const handleSelectedEventChange = (event: EventModel) => {
        setSelectedEvent(event);
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
                    <InnerText>Leagues</InnerText>
                    <TournamentsList
                        selectedSportSlug={selectedSportSlug}
                        onSelectedTournamentChange={handleSelectedTournamentChange}
                        selectedTournamentId={selectedTournamentId}
                    />
                </InnerContainer>
                <InnerContainerNoPadding>
                    <EventsList
                        selectedSportSlug={selectedSportSlug}
                        selectedTournamentId={selectedTournamentId}
                        onSelectedEventChange={handleSelectedEventChange}
                    />
                </InnerContainerNoPadding>
                <InnerContainer>
                    <EventDetails
                        selectedEvent={selectedEvent}
                        onSelectedEventChange={handleSelectedEventChange}
                        isEventPage={false}
                    />
                </InnerContainer>
            </CenteredContainer>
            <Footer/>
        </div>
    );
}