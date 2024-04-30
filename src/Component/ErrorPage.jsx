import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error occured";
  let message = "Could not fetch data";

  if (error.status === 500) {
    // message = JSON.parse(error.data).message;
    message = error.date.message;
  }

  if (error.status === 404) {
    title = "Not found";
    message = "could not find resource or page";
  }

  return (
    <>
      {title}
      <p>{message}</p>
    </>
  );
};

export default ErrorPage;
