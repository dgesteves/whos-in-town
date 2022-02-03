import styles from "@/components/EventDetails/eventSummary.module.css";

interface Props {
  title: string;
}

export default function EventSummary({ title }: Props) {
  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  );
}
