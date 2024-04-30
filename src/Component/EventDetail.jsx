import React, { Suspense } from "react";
import {
  useLoaderData,
  json,
  useRouteLoaderData,
  redirect,
  Await,
  defer,
} from "react-router-dom";
import EventSingleList from "./EventSingleList";
import EventList from "./EventList";

const EventDetail = () => {
  //   const event = useLoaderData();
  const { event, events } = useRouteLoaderData("event-data");
  console.log(event, events);
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventList event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvent) => <EventSingleList events={loadedEvent} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetail;

export async function loaderEvent(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
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

export async function loader({ request, params }) {
  const id = params.eventId;
  return defer({
    events: await loaderEvent(id),
    event: loaderEvents(),
  });
}

export async function action({ request, params }) {
  const id = params.eventId;
  console.log(id);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw json(
      { message: "could not fetch message" },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
}
