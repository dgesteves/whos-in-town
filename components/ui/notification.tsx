import styles from "./notification.module.css";

interface Props {
  message: string | undefined;
}

function Notification({ message }: Props) {
  return (
    <div className={`${styles.notification} ${styles.error}`}>
      <h2>Something WentWrong!</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
