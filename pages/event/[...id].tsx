import Head from "next/head";
import { Artist, Event } from "../../types/types";
import EventDetails from "@/components/eventDetails/eventDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchEventsById } from "../../lib/api";
import Spinner from "@/components/ui/spinner";

export default function EventDetailPage() {
  let artistName = "";
  let eventId = "";

  const {
    query: { id },
  } = useRouter();

  const [artist, setArtist] = useState<Artist>();
  const [event, setEvent] = useState<Event>();

  if (id) {
    artistName = id[0];
    eventId = id[1];
  }

  useEffect(() => {
    fetchEventsById(eventId, artistName).then((data) => {
      setArtist(data.artistData);
      setEvent(data.event);
    });
  }, [artistName, eventId]);

  if (!event || !artist) {
    return <Spinner />;
  }

  return (
    <article>
      <Head>
        <title>{event.title || artist.name}</title>
        <meta
          name="description"
          content={`Event details of ${event.title || artist.name}`}
        />
      </Head>
      <EventDetails event={event} artist={artist} />
    </article>
  );
}
