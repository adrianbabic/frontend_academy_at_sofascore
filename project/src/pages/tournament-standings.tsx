import NavBar from "@/components/NavBar/NavBar";
import { CenteredContainer, GlobalMainViewStyle, InnerText} from "../../styles/main-view.styles";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import TournamentsList from "@/components/TournamentsList/TournamentsList";
import Standings from "@/components/Standings/Standings";
import { StandingsContainer, TournamentsContainer } from "../../styles/tournament-standings.styles";
import { useRouter } from "next/router";


export default function TournamentStandings() {

    const [selectedSportSlug, setSelectedSportSlug] = useState<String | null>(null);
    const [selectedTournamentId, setSelectedTournamentId] = useState<number | null>(null);

    const handleSelectedSportSlugChange = (slug: String) => {
        setSelectedSportSlug(slug);
    };

    const handleSelectedTournamentChange = (tournamentId: number) => {
        setSelectedTournamentId(tournamentId);
    };

    const router = useRouter();

    useEffect(() => {
      const { slug, tournamentId } = router.query;

      if(slug) {
        setSelectedSportSlug(new String(slug).toString());
      }

      if(tournamentId) {
        setSelectedTournamentId(parseInt(new String(tournamentId).toString()));
      }
    }, [router.query]);

    return (
        <div>
            <GlobalMainViewStyle />
            <NavBar
                selectedSportSlug={selectedSportSlug}
                onSelectedSportSlugChange={handleSelectedSportSlugChange}
            />
            <CenteredContainer>
                <TournamentsContainer>
                    <InnerText>Leagues</InnerText>
                    <TournamentsList
                        selectedSportSlug={selectedSportSlug}
                        onSelectedTournamentChange={handleSelectedTournamentChange}
                        selectedTournamentId={selectedTournamentId}
                    />
                </TournamentsContainer>
                <StandingsContainer>
                    <Standings
                        selectedTournamentId={selectedTournamentId}
                    />
                </StandingsContainer>
            </CenteredContainer>
            <Footer />
        </div>
    );
}