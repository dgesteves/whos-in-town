import styles from "@/components/AddToFavorites/addToFavoritesButton.module.css";
import { Artist, Event } from "../../types/types";
import manageStorage from "../../lib/manageStorage";

interface Props {
  artist: Artist;
  event: Event;
}

export default function AddToFavoritesButton({ artist, event }: Props) {
  const handleClick = () => {
    manageStorage(event, artist);
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      FAVORITE
    </button>
  );
}
