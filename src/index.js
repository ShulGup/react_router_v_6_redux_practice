import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Component/HomePage";
import EventPage, { loader as EventLoader } from "./Component/Event";
import EventList from "./Component/EventList";
import NewEvent, { action as NewEventAction } from "./Component/NewEvent";
import NewEventEdit from "./Component/NewEventEdit";
import RootPage from "./Component/RootPage";
import EventRoot from "./Component/EventRoot";
import ErrorPage from "./Component/ErrorPage";
import EventDetail, {
  loader as EventDetailLoader,
  action as EventDeleteAction,
} from "./Component/EventDetail";
import { action as ManipulateAction } from "./Component/EventForm";
import NewsLeeterSignup from "./Component/NewsLeeterSignup";
import NewsLetterPage, {
  action as NewsLetterAction,
} from "./Component/NewsLetterPage";
import { App } from "./App";
import { MyProvider } from "./Context";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "event",
        element: <EventRoot />,
        children: [
          { index: true, element: <EventPage />, loader: EventLoader },
          {
            path: ":eventId",
            id: "event-data",
            loader: EventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: EventDeleteAction,
              },
              {
                path: "edit",
                element: <NewEventEdit />,
                action: ManipulateAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEvent />,
            action: ManipulateAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsLetterPage />,
        action: NewsLetterAction,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
