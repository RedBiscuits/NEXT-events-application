import { getAllEvents } from "../../dummy-data";
import EventsList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  const findSearchQuery = function (year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findSearchQuery} />
      <EventsList items={events} />
    </Fragment>
  );
}

export default EventsPage;
