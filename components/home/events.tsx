import styles from "@/components/home/events.module.css";
import EventsGrid from "@/components/events/eventsGrid";
import { Event } from "../../types/types";

interface Props {
  artistAndEvents: Event[];
}

export default function Events({ artistAndEvents }: Props) {
  return (
    <section className={styles.events}>
      <h1>Events</h1>
      <EventsGrid events={artistAndEvents} />
    </section>
  );
}
