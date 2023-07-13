import { CenteredContainer, GlobalMainViewStyle} from "../../styles/main-view.styles";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import EventDetails from "@/components/EventDetails/EventDetails";
import { EventModel } from '@/model/EventModel';
import { useRouter } from "next/router";
import { InnerContainer, UpperContainer } from "../../styles/event-page.styles";


export default function EventPage() {

    const [selectedEvent, setSelectedEvent] = useState<EventModel | null>(null);
    const router = useRouter();

    const handleSelectedEventChange = (event: EventModel) => {

        router.push("/main-view");
    };

    useEffect(() => {
      const { eventId } = router.query;

      if(eventId) {
        const id = parseInt(new String(eventId).toString());
        fetch(`https://academy.dev.sofascore.com/event/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setSelectedEvent(data);
                });
      }
    }, [router.query]);

    return (
        <div>
            <GlobalMainViewStyle />
            <UpperContainer></UpperContainer>
            <CenteredContainer>
                <InnerContainer>
                    <EventDetails
                        selectedEvent={selectedEvent}
                        onSelectedEventChange={handleSelectedEventChange}
                        isEventPage={true}
                    />
                </InnerContainer>
            </CenteredContainer>
            <Footer />
        </div>
    );
}