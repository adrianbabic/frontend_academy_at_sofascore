import React, { PropsWithChildren, useEffect, useState } from 'react'
import { CustomMessage, CustomTournamentLink, EventHeaderContainer, EventIncidentsContainer, EventNavBar, LogoAndTeamNameContainer, ResultContainer } from './EventDetails.styles'
import { EventModel, EventStatusEnum } from '@/model/EventModel';
import { GoalScoringTeamEnum, IncidentEnum, IncidentModel } from '@/model/IncidentModel';
import IncidentItem from './IncidentItem/IncidentItem';

type EventDetailsProps = {
    selectedEvent: EventModel | null;
    onSelectedEventChange: (event) => void;
    isEventPage: boolean;
};

export default function EventDetails(props: PropsWithChildren<EventDetailsProps>) {

    const [homeTeamImageURL, setHomeTeamImageURL] = useState<string>('');
    const [awayTeamImageURL, setAwayTeamImageURL] = useState<string>('');
    const [incidents, setIncidents] = useState<IncidentModel[]>([]);
    const [timeString, setTimeString] = useState<string>("");
    const [dateString, setDateString] = useState<string>("");

    useEffect(() => {

        /* ------  pravi API za logo ekipi */

        if (props.selectedEvent && props.selectedEvent.homeTeam != null) {
            fetch(`https://academy.dev.sofascore.com/team/${props.selectedEvent.homeTeam.id}/image`)
                .then((response) => response.blob())
                .then((blob) => URL.createObjectURL(blob))
                .then((data) => {
                    setHomeTeamImageURL(data);
                });
        }

        if (props.selectedEvent && props.selectedEvent.awayTeam != null) {
            fetch(`https://academy.dev.sofascore.com/team/${props.selectedEvent.awayTeam.id}/image`)
                .then((response) => response.blob())
                .then((blob) => URL.createObjectURL(blob))
                .then((data) => {
                    setAwayTeamImageURL(data);
                });
        }

        if (props.selectedEvent && props.selectedEvent.id != null) {
            fetch(`https://academy.dev.sofascore.com/event/${props.selectedEvent.id}/incidents`)
                .then((response) => response.json())
                .then((data) => {
                    setIncidents(data);
                });
        }

        if (props.selectedEvent) {

            const date = new Date(props.selectedEvent.startDate);

            setTimeString(date.getHours().toString().padStart(2, "0") + ":"
                + date.getMinutes().toString().padStart(2, "0"));

            setDateString(date.getDate().toString().padStart(2, "0") + "." + (date.getMonth() + 1).toString().padStart(2, "0") + "."
                + date.getFullYear().toString().padStart(4, "0") + ".");
        }


    }, [props.selectedEvent]);

    const handleCloseIconClick = () => {
        props.onSelectedEventChange(null);
    };


    if (props.selectedEvent) {
        return (
            <>
                <EventNavBar>
                    <img src="/images/close-icon.png" alt="close-icon" onClick={handleCloseIconClick}></img>
                    {!props.isEventPage && <a href={"/event-page?eventId=" + props.selectedEvent.id}>View Full Page {">"}</a>}
                </EventNavBar>
                <EventHeaderContainer>
                    <LogoAndTeamNameContainer>
                        <img src={homeTeamImageURL} alt="home_team_logo" />
                        <a>{props.selectedEvent.homeTeam.name}</a>
                    </LogoAndTeamNameContainer>
                    <ResultContainer inProgress={props.selectedEvent.status === EventStatusEnum.inprogres}>
                        {props.selectedEvent.homeScore.total && <span>{props.selectedEvent.homeScore.total} - {props.selectedEvent.awayScore.total}</span>}
                        {props.selectedEvent.status === EventStatusEnum.finished && <a>Full Time</a>}
                        {props.selectedEvent.status === EventStatusEnum.notstarted && <p>{dateString}</p>}
                        {props.selectedEvent.status === EventStatusEnum.notstarted && <p>{timeString}</p>}
                    </ResultContainer>
                    <LogoAndTeamNameContainer>
                        <img src={awayTeamImageURL} alt="away_team_logo" />
                        <a>{props.selectedEvent.awayTeam.name}</a>
                    </LogoAndTeamNameContainer>
                </EventHeaderContainer>
                {props.selectedEvent.status === EventStatusEnum.notstarted && <CustomMessage>No results yet.</CustomMessage>}
                {props.selectedEvent.status === EventStatusEnum.notstarted && 
                    <CustomTournamentLink href={"/tournament-standings?slug=" + props.selectedEvent.tournament.sport.slug + "&tournamentId=" + props.selectedEvent.tournament.id} >
                        View Tournament Details</CustomTournamentLink>}
                <EventIncidentsContainer>
                    {incidents.map((inc) => (
                        <IncidentItem
                            key={inc.id}
                            incident={inc}
                            homeTeamScore={inc.homeScore ? inc.homeScore : 0}
                            awayTeamScore={inc.awayScore ? inc.awayScore : 0}
                        />
                    ))}
                </EventIncidentsContainer>
            </>
        )
    }
}
