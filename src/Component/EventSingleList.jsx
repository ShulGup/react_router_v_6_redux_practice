import React from "react";
import { Link, useSubmit } from "react-router-dom";

const EventSingleList = ({ events }) => {
  const submit = useSubmit();
  if (!events || !events.name) {
    return <div>Loading...</div>; // or handle the undefined case in another way
  }
  function startDeleteHandler() {
    const proceed = window.confirm("are you sure you want to delete the data");
    if (proceed) {
      submit(null, { method: "delete" });
    }
  }
  console.log(events);
  return (
    <>
      <h1>{events.name}</h1>
      <h2>{events.email}</h2>
      <h3>{events.address.city}</h3>
      <Link to=".." relative="path">
        <button>Navigate</button>
      </Link>
      <Link to="edit">
        <button>Edit</button>
      </Link>
      <button onClick={startDeleteHandler}>Delete</button>
    </>
  );
};

export default EventSingleList;
