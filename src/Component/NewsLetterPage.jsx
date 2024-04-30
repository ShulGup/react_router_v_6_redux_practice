import React from "react";
import NewsLeeterSignup from "./NewsLeeterSignup";

const NewsLetterPage = () => {
  return (
    <div>
      <NewsLeeterSignup />
    </div>
  );
};

export default NewsLetterPage;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");
  console.log(email);
  return { message: "SignUp successful!" };
}
