import Head from "next/head";

import Hero from "@/components/home/hero";
import SearchForm from "@/components/home/searchForm";
import Events from "@/components/home/events";
import { useState } from "react";
import { ApiErrorMessage, Event } from "../types/types";
import Notification from "@/components/ui/notification";

export default function HomePage() {
  const [searchData, setSearchData] = useState<Event[]>([]);
  const [error, setError] = useState<ApiErrorMessage>({
    errorMessage: "",
  });

  const onSearch = (searchedData: Event[]) => {
    setSearchData(searchedData);
  };

  const onError = (err: ApiErrorMessage) => {
    setError(err);
  };

  const renderNotification = error.errorMessage && (
    <Notification message={error.errorMessage} />
  );

  const renderEvents = searchData.length && (
    <Events artistAndEvents={searchData} />
  );

  return (
    <>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>Who's In Town</title>
        <meta
          name="description"
          content="Search for your any band and check there next events"
        />
      </Head>
      <Hero />
      <SearchForm onSearch={onSearch} onError={onError} />
      {renderNotification}
      {renderEvents}
    </>
  );
}
