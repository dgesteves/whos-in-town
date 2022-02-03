import styles from "@/components/eventDetails/eventLogisticsItem.module.css";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export default function EventLogisticsItem({ children }: Props) {
  return (
    <li className={styles.item}>
      <span className={styles.content}>{children}</span>
    </li>
  );
}
