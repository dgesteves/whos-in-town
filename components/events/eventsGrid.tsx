import EventItem from "@/components/events/eventItem";
import styles from "@/components/events/eventsGrid.module.css";
import { Event } from "../../types/types";

interface Props {
  events: Event[];
}

export default function EventsGrid({ events }: Props) {
  const artist = events[0].artist;
  return (
    <ul className={styles.grid}>
      {events.map((event) => (
        <EventItem
          artist={event.artist || artist}
          event={event}
          key={event.id}
        />
      ))}
    </ul>
  );
}
