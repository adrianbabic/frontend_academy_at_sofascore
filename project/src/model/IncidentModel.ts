import { Player } from "./Player";

export enum CardTeamSideEnum {
    home = "home",
    away = "away"
}

export enum GoalScoringTeamEnum {
    home = "home",
    away = "away"
}

export enum CardColorEnum {
    yellow = "yellow",
    yellowred = "yellowred",
    red = "red"
}

export enum IncidentEnum {
    card = "card",
    goal = "goal",
    period = "period"
}

export enum GoalTypeEnum {
    regular = "regular",
    owngoal = "owngoal",
    penalty = "penalty",
    onepoint = "onepoint",
    twopoint = "twopoint",
    threepoint = "threepoint",
    touchdown = "touchdown",
    safety = "safety",
    fieldgoal = "fieldgoal",
    extrapoint = "extrapoint"
}

export interface IncidentModel {
    player: Player
    teamSide: CardTeamSideEnum
    scoringTeam: GoalScoringTeamEnum
    color: CardColorEnum
    id: number
    time: number
    type: IncidentEnum
    goalType: GoalTypeEnum
    text: string
    homeScore: number
    awayScore: number
}