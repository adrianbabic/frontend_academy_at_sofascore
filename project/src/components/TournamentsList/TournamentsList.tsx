import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Container } from './TournamentsList.styles';
import TournamentItem from './TournamentItem';
import { Tournament } from '@/model/Tournament';
import { tournaments_americanFootball, tournaments_basketball, tournaments_football } from '@/api/stringFormatApi';

type TournamentsListProps = {
  selectedSportSlug: String;
  onSelectedTournamentChange: (tournamentId) => void;
  selectedTournamentId: number | null;
};

export default function TournamentsList(props: PropsWithChildren<TournamentsListProps>) {

  const [tournaments, setTournaments] = useState<Tournament[]>([]);

  useEffect(() => {
    
    /* ----- Pravi API*/

    // if (props.selectedSportSlug != null) {
    //   fetch(`https://academy.dev.sofascore.com/sport/${props.selectedSportSlug}/tournaments`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setTournaments(data);
    //       props.onSelectedTournamentChange(data[0].id);
    //     });
    // }


    /* ------- Hardkodirani API */

    if (props.selectedSportSlug === "football") {

      const data = JSON.parse(tournaments_football);
      setTournaments(data);
      props.onSelectedTournamentChange(data[0].id);
    } else if (props.selectedSportSlug === "basketball") {

      const data = JSON.parse(tournaments_basketball);
      setTournaments(data);
      props.onSelectedTournamentChange(data[0].id);
    } else if (props.selectedSportSlug === "american-football") {

      const data = JSON.parse(tournaments_americanFootball);
      setTournaments(data);
      props.onSelectedTournamentChange(data[0].id);
    } 

  }, [props.selectedSportSlug]);

  return (
    <Container>
      {tournaments.map((tour) => (
        <TournamentItem
          key={tour.id}
          name={tour.name}
          slug={tour.slug}
          tournamentId={tour.id}
          onSelectedTournamentChange={props.onSelectedTournamentChange}
          selectedTournamentId={props.selectedTournamentId}
        />
      ))}
    </Container>
  );
};


