import styles from "@/components/home/searchForm.module.css";
import Search from "@/components/search/search";
import { FormEvent, useState } from "react";
import { fetchArtistAndEvents } from "../../lib/api";
import { ApiErrorMessage, Event } from "../../types/types";

interface Props {
  onSearch: (searchedData: Event[]) => void;
  onError: (err: ApiErrorMessage) => void;
}

export default function SearchForm({ onSearch, onError }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (term: string) => {
    setSearchTerm(term);
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await fetchArtistAndEvents(searchTerm);
    if (data.errorMessage) {
      onError(data.errorMessage);
      onSearch([]);
    }
    if (!data.length) {
      onError({ errorMessage: "Artist and event not found." });
      onSearch([]);
    }
    if (data.length) {
      onSearch(data);
      onError({ errorMessage: "" });
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <Search onTermChange={searchHandler} />
      <button className={styles.button}>SEARCH</button>
    </form>
  );
}
