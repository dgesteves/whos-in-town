import styles from "@/components/ui/spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />;
    </div>
  );
}
