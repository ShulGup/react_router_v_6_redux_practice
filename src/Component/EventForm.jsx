import React from "react";
import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
  json,
} from "react-router-dom";

const EventForm = ({ event, method }) => {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  // Check if event is defined
  if (!event) {
    return <div>Loading...</div>; // or handle the undefined case in another way
  }

  const isSubmitting = navigation.state === "submitting";

  const onCancle = () => {
    navigate("..");
  };

  return (
    <>
      <Form method={method}>
        {data && data.error && (
          <ul>
            {Object.values(data.error.map((err) => <li key={err}>{err}</li>))}
          </ul>
        )}
        <input defaultValue={event.name || ""} name="name" />{" "}
        {/* Provide default value if event.name is undefined */}
        <input defaultValue={event.email || ""} name="email" />{" "}
        {/* Provide default value if event.email is undefined */}
        <textarea
          defaultValue={event.company ? event.company.catchPhrase : ""}
          name="company"
        />{" "}
        {/* Check if event.company is defined before accessing catchPhrase */}
        <button disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "save"}
        </button>
        <button onClick={onCancle} disabled={isSubmitting}>
          cancel
        </button>
      </Form>
    </>
  );
};

export default EventForm;

export async function action({ request, params }) {
  // Instead of using useNavigate here, return a function that performs the navigation
  console.log(request);
  const method = request.method;
  return async () => {
    // Move this line inside the returned function
    const data = await request.formData();
    console.log("data", data);
    const eventData = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company.catchPhrase"),
    };
    let url = "https://jsonplaceholder.typicode.com/users";
    if (method === "PATCH") {
      const id = params.eventId;
      url = `https://jsonplaceholder.typicode.com/${id}`;
    }

    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });
    if (response.status === 422) {
      return response;
    }
    console.log(response);
    if (!response.ok) {
      throw json(
        { message: "could not fetch message" },
        {
          status: 500,
        }
      );
    }
    return response;
  };
}
