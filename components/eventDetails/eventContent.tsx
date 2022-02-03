import styles from "@/components/EventDetails/eventContent.module.css";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export default function EventContent({ children }: Props) {
  return <section className={styles.content}>{children}</section>;
}
