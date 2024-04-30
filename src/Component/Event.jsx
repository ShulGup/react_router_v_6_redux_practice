import React, { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import EventList from "./EventList";

const EventPage = () => {
  const { event } = useLoaderData();
  console.log({ event });

  if (event.isError) {
    <p>{event.message}</p>;
  }
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventList event={loadedEvent} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventPage;

export async function loaderEvents() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    // return { isError: true, message: "could not fetch response" };
    // throw new Error(response.message);
    // throw new Response(JSON.stringify({ message: "could not fetch message" }), {
    //   status: 500,
    // });
    throw json(
      { message: "could not fetch message" },
      {
        status: 500,
      }
    );
  } else {
    const respEvent = await response.json();
    return respEvent;
  }
}

export async function loader() {
  return defer({
    event: loaderEvents(),
  });
}
