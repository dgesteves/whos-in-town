import styles from "@/components/search/search.module.css";
import { useEffect, useState } from "react";

interface Props {
  onTermChange: (term: string) => void;
}

export default function Search({ onTermChange }: Props) {
  const [term, setTerm] = useState("");

  useEffect(() => {
    onTermChange(term);
  }, [term, onTermChange]);

  return (
    <input
      type="search"
      className={styles.search}
      value={term}
      onChange={(e) => setTerm(e.target.value)}
    />
  );
}

// TODO: add autocomplete functionality based on prev search
