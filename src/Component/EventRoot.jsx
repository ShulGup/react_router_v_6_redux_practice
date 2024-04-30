import React from "react";
import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import NewsLeeterSignup from "./NewsLeeterSignup";

const EventRoot = () => {
  const navigate = useNavigate();
  return (
    <>
      <br />
      <NavLink to="" end>
        All Event
      </NavLink>
      <NavLink to="new">New Event</NavLink>
      {/* <button onClick={() => navigate("..")}>Back</button> */}
      <hr />
      <Outlet />
    </>
  );
};

export default EventRoot;
