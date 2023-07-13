import React, { useState } from 'react'
import { Background, MenuIcon, SideMenuContainer } from './SideMenu.styles'
import SideMenuLink from './SideMenuLink';

export default function SideMenu() {

    const [open, setOpen] = useState(false);

    const toggleSideMenu = () => {
        setOpen((previous) => !previous);
    }

    return (
        <>
            <MenuIcon onClick={toggleSideMenu} >
                <img src="/images/sidebar-icon.png" alt="sidebar-icon" />
            </MenuIcon>
            <Background open={open} onClick={toggleSideMenu} />
            <SideMenuContainer open={open}>
                <SideMenuLink
                    text={"Home"}
                    href={"/main-view"}
                    handleClicked={toggleSideMenu}
                    first={true}
                />
                <SideMenuLink
                    text={"Standings"}
                    href={"/tournament-standings"}
                    handleClicked={toggleSideMenu}
                />
                <SideMenuLink
                    text={"Matches"}
                    href={"/main-view"}
                    handleClicked={toggleSideMenu}
                />
                <SideMenuLink
                    text={"About"}
                    href={"/about"}
                    handleClicked={toggleSideMenu}
                />
            </SideMenuContainer>
        </>
    )
};
