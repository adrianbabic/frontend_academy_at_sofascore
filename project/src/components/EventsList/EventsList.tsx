import React, { PropsWithChildren, useEffect, useState } from 'react'
import DatePicker from './DatePicker/DatePicker'
import { DetailsBar, EventsContainer, EventsListContainer } from './EventsList.styles'
import { EventModel } from '@/model/EventModel';
import EventsListItem from './EventsListItem/EventsListItem';


type EventsListProps = {
    selectedSportSlug: String | null;
    selectedTournamentId: number | null;
    onSelectedEventChange: (event) => void;
};

export default function EventsList(props: PropsWithChildren<EventsListProps>) {

    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [dateString, setDateString] = useState<String>("");
    const [allEvents, setAllEvents] = useState<EventModel[]>([]);
    const [eventsByTournament, setEventsByTournament] = useState<EventModel[]>([]);
    const [tournamentName, setTournamentName] = useState<string>("");

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const handleSelectedDateChange = (date: Date) => {
        setSelectedDate(date);
    };

    const areDatesEqual = (date1: Date, date2: Date) => {
        return date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear();
    };

    const formatDate = (date: Date) => {

        const year = date.getFullYear().toString().padStart(4, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");

        return `${year}-${month}-${day}`;
    };

    useEffect(() => {

        /* ----- Pravi API*/

        if (props.selectedSportSlug != null && selectedDate != null) {
            fetch(`https://academy.dev.sofascore.com/sport/${props.selectedSportSlug}/events/${formatDate(selectedDate)}`)
                .then((response) => response.json())
                .then((data) => {
                    setAllEvents(data);
                });
        }

        if (areDatesEqual(selectedDate, new Date())) {
            setDateString("Today");
        } else {
            setDateString(daysOfWeek[selectedDate.getDay()]);
        }

    }, [selectedDate, props.selectedSportSlug]);

    useEffect(() => {

        const events = allEvents.filter(event => event.tournament.id === props.selectedTournamentId);
        setEventsByTournament(events);

        if (props.selectedTournamentId != null) {
            fetch(`https://academy.dev.sofascore.com/tournament/${props.selectedTournamentId}`)
                .then((response) => response.json())
                .then((data) => {
                    setTournamentName(data.name);
                });
        }

    }, [props.selectedTournamentId, allEvents]);

    return (
        <>
            <EventsContainer>
                <DatePicker
                    onSelectedDateChange={handleSelectedDateChange}
                />
                <DetailsBar>
                    <p>{dateString} - {tournamentName}</p>
                    <p>{eventsByTournament.length} Events</p>
                </DetailsBar>
                <EventsListContainer>
                    {eventsByTournament.map((event) => (
                        <EventsListItem
                            key={event.id}
                            eventItem={event}
                            eventClicked={props.onSelectedEventChange}
                        />
                    ))}
                </EventsListContainer>
            </EventsContainer>
        </>
    )
}
