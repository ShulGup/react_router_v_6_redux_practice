import React from "react";
import { Link, NavLink } from "react-router-dom";

const EventList = ({ event }) => {
  console.log(event);
  return (
    <>
      {event.map((events) => (
        <li key={events.id} type="none">
          <NavLink to={`/event/${events.id}`}>
            <h1>{events.name}</h1>
          </NavLink>
          <h2>{events.email}</h2>
          <h3>{events.address.city}</h3>
        </li>
      ))}
    </>
  );
};

export default EventList;
