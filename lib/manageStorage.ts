import { FAVORITES } from "../constants/constants";
import { Artist, Event } from "../types/types";

export default function manageStorage(event: Event, artist: Artist) {
  const events = JSON.parse(localStorage.getItem(FAVORITES) as string);

  if (events) {
    let updatedEvents = [...events];

    const isEventInEvents =
      events && events.find((e: Event) => e.id === event.id);

    if (isEventInEvents) {
      updatedEvents = events.filter((e: Event) => e.id !== event.id);
      localStorage.removeItem(FAVORITES);
      localStorage.setItem(FAVORITES, JSON.stringify(updatedEvents));
    } else {
      updatedEvents.push({ ...event, artist });
      localStorage.setItem(FAVORITES, JSON.stringify(updatedEvents));
    }
  } else {
    localStorage.setItem(FAVORITES, JSON.stringify([{ ...event, artist }]));
  }
}
