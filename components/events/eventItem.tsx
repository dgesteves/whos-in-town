import Link from "next/link";
import Image from "next/image";
import styles from "@/components/events/eventItem.module.css";
import { Artist, Event } from "../../types/types";
import { formatDate } from "../../lib/formatDate";

interface Props {
  event: Event;
  artist: Artist | undefined;
}

export default function EventItem({ event, artist }: Props) {
  const formattedDate = formatDate(event.datetime, "en-US");

  return (
    <li className={styles.event}>
      <Link href={`/event/${artist?.name}/${event.id}`}>
        <a>
          <div className={styles.image}>
            <Image
              src={
                artist?.image_url ||
                "https://photos.bandsintown.com/artistThumb.jpg"
              }
              alt={artist?.name}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={styles.content}>
            <h3>{artist?.name}</h3>
            <time>{formattedDate}</time>
            <p>{event.title || "No description available"}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
