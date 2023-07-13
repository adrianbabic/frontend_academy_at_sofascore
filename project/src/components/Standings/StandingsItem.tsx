import { PropsWithChildren, useState } from "react";
import { PositionCircle, StandingsTableData, StandingsTableRow } from "./Standings.styles";

type StandingsItemProps = {
    position: number;
    name: string;
    played: number;
    wins: number;
    draws: number;
    losses: number;
    scoresFor: number;
    scoresAgainst: number;
    points: number;
    percentage: number;
};

export default function StandingsItem(props: PropsWithChildren<StandingsItemProps>) {

    return (
        <StandingsTableRow>
            <StandingsTableData>
                <PositionCircle>{props.position}</PositionCircle>
            </StandingsTableData>
            <StandingsTableData>{props.name}</StandingsTableData>
            <StandingsTableData>{props.played}</StandingsTableData>
            <StandingsTableData>{props.wins}</StandingsTableData>
            <StandingsTableData>{props.draws}</StandingsTableData>
            <StandingsTableData>{props.losses}</StandingsTableData>
            <StandingsTableData>{props.scoresFor}:{props.scoresAgainst}</StandingsTableData>
            {props.points != null && <StandingsTableData>{props.points}</StandingsTableData>}
            {props.percentage != null && <StandingsTableData>{props.percentage.toFixed(2)}</StandingsTableData>}
        </StandingsTableRow>
    );
};