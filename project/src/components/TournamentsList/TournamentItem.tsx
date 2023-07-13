import { useRouter } from "next/router";
import { PropsWithChildren, useEffect, useState } from "react";
import { Option } from "./TournamentsList.styles";
import { getTournamentLogoById } from "@/utils/imagesHandler";

type TournamentItemProps = {
    name: string;
    slug: string;
    tournamentId: number;
    onSelectedTournamentChange: (tournamentId) => void;
    selectedTournamentId: number;
};

export default function TournamentItem(props: PropsWithChildren<TournamentItemProps>) {

    const [imageURL, setImageURL] = useState<string>('');

    const handleSelectTournamentClick = (tournamentId: number) => {
        props.onSelectedTournamentChange(tournamentId);
    };

    useEffect(() => {

        /* pravi API */

        // if(props.tournamentId != null){
        //     fetch(`https://academy.dev.sofascore.com/tournament/${props.tournamentId}/image`)
        //         .then((response) => response.blob())
        //         .then((blob) => URL.createObjectURL(blob))
        //         .then((data) => {
        //             setImageURL(data);
        //             console.log(props.tournamentId);
        //         });
        // }

        setImageURL(getTournamentLogoById(props.tournamentId));

    }, []);

    return (
        <Option
            onClick={() => handleSelectTournamentClick(props.tournamentId)}
            isSelected={props.selectedTournamentId === props.tournamentId}
        >
            {imageURL && <img src={imageURL} alt="Tournament logo" />}
            <p>{props.name}</p>
        </Option>);
};


