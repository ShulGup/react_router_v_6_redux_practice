import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import NewsLeeterSignup from "./NewsLeeterSignup";

const RootPage = () => {
  return (
    <>
      <NavLink to="" end>
        Home
      </NavLink>
      <br />
      <NavLink to="event">Event</NavLink>
      <br />
      <NavLink to="newsletter">NewsLetterSignup</NavLink>
      <br />
      <NewsLeeterSignup />
      <Outlet />
    </>
  );
};

export default RootPage;
