import React, { PropsWithChildren } from 'react'
import { FirstMenuLink, MenuLink } from './SideMenu.styles';
import { Url } from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/router';

type SideMenuLinkProps = {
    text: String;
    href: Url;
    handleClicked: () => void;
    first?: boolean;
};

export default function SideMenuLink(props: PropsWithChildren<SideMenuLinkProps>) {

    const currentPath = useRouter().pathname;

    const checkCurrentPath = () => {
        
        if(currentPath === props.href) {
            props.handleClicked();
        }
    };

    return (
        <>
            {props.first  && <FirstMenuLink href={props.href} onClick={checkCurrentPath}>{props.text}</FirstMenuLink>}
            {!props.first && <MenuLink href={props.href} onClick={checkCurrentPath}>{props.text}</MenuLink>}
        </>
    )
}
