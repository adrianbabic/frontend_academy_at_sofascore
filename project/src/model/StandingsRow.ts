import { Team } from "./Team";

export interface StandingsRow {
  id: number;
  team: Team;
  points: number;
  scoresFor: number;
  scoresAgainst: number;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  percentage: number
}
