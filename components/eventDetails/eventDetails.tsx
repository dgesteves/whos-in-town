import { Artist, Event } from "../../types/types";
import EventLogistics from "@/components/eventDetails/eventLogistics";
import EventSummary from "@/components/eventDetails/eventSummary";
import EventContent from "@/components/eventDetails/eventContent";
import AddToFavoritesButton from "@/components/addToFavorites/addToFavoritesButton";

interface Props {
  event: Event;
  artist: Artist;
}

export default function EventDetails({ event, artist }: Props) {
  return (
    <>
      <EventSummary title={event.title || artist.name} />
      <EventLogistics
        date={event.datetime}
        venue={event.venue}
        image={artist.image_url}
        alt={artist.name}
        offers={event.offers}
      />
      <EventContent>
        <AddToFavoritesButton artist={artist} event={event} />
        <h3>Description</h3>
        <p>{event.description || "No description available"}</p>
        <h3>Event Line Up</h3>
        <ul>
          {event.lineup?.map((band) => (
            <li key={band}>{band}</li>
          ))}
        </ul>
      </EventContent>
    </>
  );
}
