import React, { PropsWithChildren, useEffect, useState } from 'react'
import { ItemContainer, ItemTeamsContainer, ItemTimeContainer, NameAndLogoContainer, TeamContainer } from './EventsListItem.styles'
import { EventStatusEnum, EventModel } from '@/model/EventModel';


type EventsListItemProps = {
    eventItem: EventModel
    eventClicked: (event) => void;
};

export default function EventsListItem(props: PropsWithChildren<EventsListItemProps>) {

    const [homeTeamImageURL, setHomeTeamImageURL] = useState<string>('');
    const [awayTeamImageURL, setAwayTeamImageURL] = useState<string>('');

    useEffect(() => {


        /* ------  pravi API za logo ekipi */

        if (props.eventItem.homeTeam != null) {
            fetch(`https://academy.dev.sofascore.com/team/${props.eventItem.homeTeam.id}/image`)
                .then((response) => response.blob())
                .then((blob) => URL.createObjectURL(blob))
                .then((data) => {
                    setHomeTeamImageURL(data);
                });
        }

        if (props.eventItem.awayTeam != null) {
            fetch(`https://academy.dev.sofascore.com/team/${props.eventItem.awayTeam.id}/image`)
                .then((response) => response.blob())
                .then((blob) => URL.createObjectURL(blob))
                .then((data) => {
                    setAwayTeamImageURL(data);
                });
        }

    }, []);
    return (
        <>
            <ItemContainer onClick={() => props.eventClicked(props.eventItem)}>
                <ItemTimeContainer>
                    <a>{new Date(props.eventItem.startDate).getHours().toString().padStart(2, "0")}:{new Date(props.eventItem.startDate).getMinutes().toString().padStart(2, "0")}</a>
                    <a>{props.eventItem.status === EventStatusEnum.finished ? "FT" : ""}</a>
                </ItemTimeContainer>
                <ItemTeamsContainer>
                    <TeamContainer isLoser={props.eventItem.homeScore.total < props.eventItem.awayScore.total}>
                        <NameAndLogoContainer>
                            <img src={homeTeamImageURL} alt="home_team_logo" />
                            <a>{props.eventItem.homeTeam.name}</a>
                        </NameAndLogoContainer>
                        <a>{props.eventItem.homeScore.total}</a>
                    </TeamContainer>
                    <TeamContainer isLoser={props.eventItem.homeScore.total > props.eventItem.awayScore.total}>
                        <NameAndLogoContainer>
                            <img src={awayTeamImageURL} alt="away_team_logo" />
                            <a>{props.eventItem.awayTeam.name}</a>
                        </NameAndLogoContainer>
                        <a>{props.eventItem.awayScore.total}</a>
                    </TeamContainer>
                </ItemTeamsContainer>
            </ItemContainer>
        </>
    )
}
