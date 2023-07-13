import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Container, HeaderNavBarContainer, HeaderTitleContainer, LeagueTitle, PositionCircle, StandingsHeaderContainer, StandingsTable, StandingsTableContainer, StandingsTableHead, StandingsTableHeadCell, StandingsTableRow, TableOption, TournamentLogoContainer } from './Standings.styles';

import StandingsItem from './StandingsItem';
import { StandingsModel } from '@/model/StandingsModel';
import { StandingsRow } from '@/model/StandingsRow';
import { getStandingsById } from '@/api/stringFormatApi';
import { getTournamentLogoById } from '@/utils/imagesHandler';

type StandingsProps = {
    selectedTournamentId: number | null;
};

export default function Standings(props: PropsWithChildren<StandingsProps>) {

    const [standingsModel, setStandingsModel] = useState<StandingsModel[]>([]);
    const [standingsRows, setStandingsRows] = useState<StandingsRow[]>([]);
    const [hasPoints, setHasPoints] = useState(false);
    const [imageURL, setImageURL] = useState<string>('');
    const [selectedType, setSelectedType] = useState<String | null>(null);

    useEffect(() => {

        /* pravi API  za tablicu */

        // if (props.selectedTournamentId != null) {
        //     fetch(`https://academy.dev.sofascore.com/tournament/${props.selectedTournamentId}/standings`)
        //         .then((response) => response.json())
        //         .then((data) => {
        //             setStandingsModel(data);
        //             setStandingsRows(data[0].sortedStandingsRows);
        //             console.log("Trenutni tournament id: " + props.selectedTournamentId);
        //             // props.onSelectedTournamentChange(data[0].id);
        //         });
        // }

        /* ----- hardkodiran API za tablicu */

        const standingsAPI = getStandingsById(props.selectedTournamentId);
        const data = JSON.parse(standingsAPI);
        setStandingsModel(data);
        setStandingsRows(data[0].sortedStandingsRows);
        setSelectedType(data[0].type);

        /* ------  pravi API za logo turnira */

        // if(props.tournamentId != null){
        //     fetch(`https://academy.dev.sofascore.com/tournament/${props.tournamentId}/image`)
        //         .then((response) => response.blob())
        //         .then((blob) => URL.createObjectURL(blob))
        //         .then((data) => {
        //             setImageURL(data);
        //             console.log(props.tournamentId);
        //         });
        // }

        /* ------ hardkodiran API za logo turnira */
        
        setImageURL(getTournamentLogoById(props.selectedTournamentId));

    }, [props.selectedTournamentId]);

    useEffect(() => {

        if (standingsRows[0] != undefined && standingsRows[0].points != null) {
            setHasPoints(true);
        } else {
            setHasPoints(false);
        }
    }, [standingsRows]);

    useEffect(() => {
        
        for(const i of standingsModel){
            if(i.type === selectedType) {
                setStandingsRows(i.sortedStandingsRows);
                break;
            }
        }
    }, [selectedType]);

    const handleSelectedTypeChange = (type: String) => {
        setSelectedType(type);
    };

    var i = 1;

    return (
        <>
            <StandingsHeaderContainer>
                <HeaderTitleContainer>
                    <TournamentLogoContainer>
                    {imageURL && <img src={imageURL} alt="Tournament logo" />}
                    </TournamentLogoContainer>
                    <LeagueTitle>{standingsModel[0] ? standingsModel[0].tournament.name : ''}</LeagueTitle>
                </HeaderTitleContainer>
                <HeaderNavBarContainer>
                    {standingsModel.map((model) => (
                        <TableOption
                            key={model.id}
                            isSelected={model.type === selectedType}
                             onClick={() => handleSelectedTypeChange(model.type)}
                        >
                            {model.type}
                        </TableOption>
                    ))}
                </HeaderNavBarContainer>
            </StandingsHeaderContainer>
            <StandingsTableContainer>
                <Container>
                    <StandingsTable>
                        <StandingsTableHead>
                            <StandingsTableRow>
                                <StandingsTableHeadCell>
                                    <PositionCircle>#</PositionCircle>
                                </StandingsTableHeadCell>
                                <StandingsTableHeadCell>Team</StandingsTableHeadCell>
                                <StandingsTableHeadCell>P</StandingsTableHeadCell>
                                <StandingsTableHeadCell>W</StandingsTableHeadCell>
                                <StandingsTableHeadCell>D</StandingsTableHeadCell>
                                <StandingsTableHeadCell>L</StandingsTableHeadCell>
                                <StandingsTableHeadCell>Goals</StandingsTableHeadCell>
                                {hasPoints && <StandingsTableHeadCell>PTS</StandingsTableHeadCell>}
                                {!hasPoints && <StandingsTableHeadCell>%</StandingsTableHeadCell>}
                            </StandingsTableRow>
                        </StandingsTableHead>
                        <tbody>
                            {standingsRows.map((row) => (
                                <StandingsItem
                                    key={row.team.id}
                                    position={i++}
                                    name={row.team.name}
                                    played={row.played}
                                    wins={row.wins}
                                    draws={row.draws}
                                    losses={row.losses}
                                    scoresFor={row.scoresFor}
                                    scoresAgainst={row.scoresAgainst}
                                    points={row.points}
                                    percentage={row.percentage}
                                />
                            ))}
                        </tbody>
                    </StandingsTable>
                </Container>
            </StandingsTableContainer>
        </>
    );
};


