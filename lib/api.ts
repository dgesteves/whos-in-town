import { BASE_URL } from "../constants/constants";
import createUrl from "./createUrl";
import { Event } from "../types/types";

// NOT NECESSARY TO USE THE OTHER ENDPOINT SINCE THIS GIVE ME EVERY THING ABOUT THE ARTIST AT 1ST INDEX

export function fetchArtistAndEvents(artist: string) {
  const url = `${BASE_URL}/${artist}/events`;
  return fetchData(url);
}

async function fetchData(url: string) {
  const requestUrl = createUrl(url, { key: "app_id", value: "123" });
  try {
    const response = await fetch(requestUrl.href);
    return await response.json();
  } catch (error) {
    return error;
  }
}

export async function fetchEventsById(id: string, artist: string) {
  const events = await fetchArtistAndEvents(artist);
  const artistData = events[0].artist;
  const event = events.find((event: Event) => event.id === id);
  return { artistData, event };
}
