import { FAVORITES } from "../../constants/constants";
import Events from "@/components/home/events";
import styles from "@/components/addToFavorites/addToFavorites.module.css";
import { useEffect, useState } from "react";

export default function AddToFavorites() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(JSON.parse(localStorage.getItem(FAVORITES) as string));
  }, []);

  if (!events.length) {
    return <h1 className={styles.empty}>Your Favorites List is Empty</h1>;
  }
  return <Events artistAndEvents={events} />;
}
