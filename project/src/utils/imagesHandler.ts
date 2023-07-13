export function getTournamentLogoById(tournamentId: number) {
  switch (tournamentId) {
    case 2:
      return "/images/premier_league.png";
    case 3:
      return "/images/la_liga.png";
    case 4:
      return "/images/nba.png";
    case 5:
      return "/images/nfl.png";
    case 6:
      return "/images/hnl.png";
    case 7:
      return "/images/esl.png";
    default:
      "";
  }
}

export function getIncidentIcon(incidentName: string) {
  switch (incidentName) {
    case "regular":
      return "/images/goal.png";
    case "owngoal":
      return "/images/own_goal.png";
    case "penalty":
      return "/images/penalty_goal.png";
    case "onepoint":
      return "/images/onepoint.png";
    case "twopoint":
      return "/images/twopoint.png";
    case "threepoint":
      return "/images/threepoint.png";
    case "touchdown":
      return "/images/touchdown.png";
    case "safety":
      return "/images/safety.png";
    case "fieldgoal":
      return "/images/field_goal.png";
    case "extrapoint":
      return "/images/extra_point.png";
    case "yellow":
      return "/images/yellow_card.png";
    case "yellowred":
      return "/images/red_card.png";
    case "red":
      return "/images/red_card.png";
    default:
      "";
  }
}
