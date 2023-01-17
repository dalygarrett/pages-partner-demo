import * as React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const form = useRef(null);
  const sendEmail = (e: any) => {
    e.preventDefault();
    const currentForm = form.current;
    if (currentForm == null) return;

    emailjs
      .sendForm(
        "service_50j1947",
        "template_s8spbem",
        currentForm,
        "k_atz9w6Nf-uGC1nC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="bg-gray-200 shadow-md rounded-xl p-10">
        <div className=" ">
          <div className="text-3xl mb-6 text-center ">Contact for a Quote</div>

          <div className="grid grid-cols-2 gap-4  m-auto">
            <div className="col-span-2 md:col-span-1">
              <input
                type="text"
                className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                placeholder="First Name"
                name="first_name"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <input
                type="text"
                className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                placeholder="Last Name"
                name="last_name"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <input
                type="tel"
                className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                placeholder="Phone Number"
                name="phone_number"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <input
                type="email"
                className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                placeholder="Email Address"
                name="email"
              />
            </div>

            <div className="col-span-2">
              <textarea
                cols={30}
                rows={8}
                className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                placeholder="Comments"
                name="message"
              ></textarea>
            </div>
            <div className="col-span-2 text-right">
              <input
                type="submit"
                className="py-3 px-6 border-2 border-black bg-gray-400 hover:bg-gray-300 text-white rounded-xl font-bold w-full"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;
