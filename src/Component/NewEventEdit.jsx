import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import EventForm from "./EventForm";

const NewEventEdit = () => {
  const event = useRouteLoaderData("event-data");
  console.log(event);
  return <EventForm event={event} method="patch" />;
};

export default NewEventEdit;
