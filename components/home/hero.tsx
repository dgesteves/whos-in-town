import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Looking for events near by...</h1>
      <p>
        With Who's In Town you can search for your favorite bands and check
        where are they are performing.
      </p>
    </section>
  );
}
