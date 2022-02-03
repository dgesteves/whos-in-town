import Image from "next/image";
import Link from "next/link";
import styles from "@/components/eventDetails/eventLogistics.module.css";
import EventLogisticsItem from "@/components/eventDetails/eventLogisticsItem";
import { formatDate } from "../../lib/formatDate";

interface Props {
  date: string;
  venue: {
    name: string;
    location: string;
  };
  offers: { status: string; type: string; url: string }[];
  image: string;
  alt: string;
}

export default function EventLogistics({
  date,
  venue,
  image,
  alt,
  offers,
}: Props) {
  const formattedDate = formatDate(date, "en-US");

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <Image src={image} alt={alt} width={300} height={300} />
      </div>
      <ul className={styles.list}>
        <EventLogisticsItem>
          <time>{formattedDate}</time>
        </EventLogisticsItem>
        <EventLogisticsItem>
          <address>{venue.location}</address>
          <address>{venue.name}</address>
        </EventLogisticsItem>
        <EventLogisticsItem>
          {offers.map((offer, i) => (
            <div key={i}>
              <p>{offer.status}</p>
              <Link href={offer.url}>Get Tickets Here</Link>
            </div>
          ))}
        </EventLogisticsItem>
      </ul>
    </section>
  );
}
