import React, { useEffect } from "react";
import { Form, useFetcher } from "react-router-dom";

const NewsLeeterSignup = () => {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);
  return (
    <>
      <fetcher.Form method="post" action="/newsletter">
        <input />
        <button>Sign up</button>
      </fetcher.Form>
    </>
  );
};

export default NewsLeeterSignup;
