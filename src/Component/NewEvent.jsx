import React from "react";
import { useLoaderData } from "react-router-dom";
import EventForm from "./EventForm";

const NewEvent = () => {
  const event = useLoaderData();
  console.log(event);
  return <EventForm event={event} method="POST" />;
};

export default NewEvent;
