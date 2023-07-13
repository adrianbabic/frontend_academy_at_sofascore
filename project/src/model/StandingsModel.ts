import { StandingsRow } from "./StandingsRow";
import { Tournament } from "./Tournament";

export enum StandingsTypeEnum {
    total = "total",
    home = "home",
    away = "away",
}

export interface StandingsModel {
    id: number;
    tournament: Tournament;
    type: StandingsTypeEnum;
    sortedStandingsRows: StandingsRow[];
  }
  