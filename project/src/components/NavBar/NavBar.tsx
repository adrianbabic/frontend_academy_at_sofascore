import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Container, MenuIcon, Option, SportsContainer } from './NavBar.styles';
import { sportsAPI } from '@/api/stringFormatApi';
import { Sport } from '@/model/Sport';
import SideMenu from './SideMenu/SideMenu';

type NavBarProps = {
  selectedSportSlug: String | null;
  onSelectedSportSlugChange: (slug) => void;
};

export default function NavBar(props: PropsWithChildren<NavBarProps>) {

  const [sports, setSports] = useState<Sport[]>([]);

  useEffect(() => {

    // fetch('https://academy.dev.sofascore.com/sports')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setSports(data);
    //     handleSelectSportClick(data[0].slug);
    //   });

    const data = JSON.parse(sportsAPI);
    setSports(data);
    handleSelectSportClick(data[0].slug);

  }, []);

  const handleSelectSportClick = (slug: String) => {
    props.onSelectedSportSlugChange(slug);
  }

  return (
    <Container>
      <SideMenu/>
      <SportsContainer>
        {sports.map((sport) => (
          <Option
            key={sport.id}
            isSelected={sport.slug === props.selectedSportSlug}
            onClick={() => handleSelectSportClick(sport.slug)}
          >
            {sport.name}
          </Option>
        ))}
      </SportsContainer>
    </Container>
  );
};
