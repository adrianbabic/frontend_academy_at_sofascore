import React, { PropsWithChildren, useEffect, useState } from 'react'
import { AwayIncident, HomeIncident, IncidentContainer, Period, PlayerInformation, TimeAndIconContainer } from './IncidentItem.styles'
import { CardTeamSideEnum, GoalScoringTeamEnum, IncidentEnum, IncidentModel } from '@/model/IncidentModel';
import { getIncidentIcon } from '@/utils/imagesHandler';

type IncidentItemProps = {
  incident: IncidentModel;
  homeTeamScore: number;
  awayTeamScore: number;
};

enum CustomIncidentType {
  period = "period",
  home = "home",
  away = "away"
}


export default function IncidentItem(props: PropsWithChildren<IncidentItemProps>) {

  const [customType, setCustomType] = useState<CustomIncidentType | null>(null);
  const [imageURL, setImageURL] = useState<string>("");

  useEffect(() => {

    if (props.incident) {
      if (props.incident.type === IncidentEnum.period) {
        setCustomType(CustomIncidentType.period);
      } else if (props.incident.scoringTeam === GoalScoringTeamEnum.home || props.incident.teamSide === CardTeamSideEnum.home) {
        setCustomType(CustomIncidentType.home);
      } else if (props.incident.scoringTeam === GoalScoringTeamEnum.away || props.incident.teamSide === CardTeamSideEnum.away) {
        setCustomType(CustomIncidentType.away);
      } else {
        setCustomType(null);
      }

      if(props.incident.goalType){
        setImageURL(getIncidentIcon(props.incident.goalType));
      } else if (props.incident.color) {
        setImageURL(getIncidentIcon(props.incident.color));
      } 
    }



  }, []);


  if (customType && customType === CustomIncidentType.period) {
    return (
      <>
        <Period>
          {props.incident.text}
        </Period>
      </>
    )
  } else if (customType && customType === CustomIncidentType.home) {
    return (
      <>
        <HomeIncident>
          <TimeAndIconContainer>
            {imageURL && <img src={imageURL} alt="icon"></img>}
            <a>{props.incident.time}'</a>
          </TimeAndIconContainer>
          <PlayerInformation isAway={false}>
            <p>{props.homeTeamScore} - {props.awayTeamScore}</p>
            <span>{props.incident.player.name}</span>
          </PlayerInformation>
        </HomeIncident>
      </>
    )
  } else if (customType && customType === CustomIncidentType.away) {
    return (
      <>
        <AwayIncident>
          <PlayerInformation isAway={true}>
            <span>{props.incident.player.name}</span>
            <p>{props.homeTeamScore} - {props.awayTeamScore}</p>
          </PlayerInformation>
          <TimeAndIconContainer>
            <img src={imageURL} alt="icon"></img>
            <a>{props.incident.time}'</a>
          </TimeAndIconContainer>
        </AwayIncident>
      </>
    )
  } else {
    return (
      <>
        <IncidentContainer>
        </IncidentContainer>
      </>
    )
  }
}
