import { Score } from "./Score"
import { Team } from "./Team"
import { Tournament } from "./Tournament"

export enum EventStatusEnum {
    notstarted = "notstarted",
    inprogres = "inprogress",
    finished = "finished"
}

export enum WinnerCodeEnum {
    home = "home",
    away = "away",
    draw = "draw"
}

export interface EventModel {
    id: number
    slug: string
    tournament: Tournament
    homeTeam: Team
    awayTeam: Team
    status: EventStatusEnum
    startDate: string
    homeScore: Score
    awayScore: Score
    winnerCode: WinnerCodeEnum
    round: number
}