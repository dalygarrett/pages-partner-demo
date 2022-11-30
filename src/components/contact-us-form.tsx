import * as React from "react";
import { useState } from "react";

const ContactUsForm = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  return (
    <div className="bg-gray-200 p-6">
      <div className=" ">
        <div className="text-3xl mb-6 text-center ">Contact for a Quote</div>

        <div className="grid grid-cols-2 gap-4  m-auto">
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
              placeholder="First Name"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
              placeholder="Last Name"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              type="tel"
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
              placeholder="Phone number"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              type="email"
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
              placeholder="Email Address"
            />
          </div>

          <div className="col-span-2">
            <textarea
              cols={30}
              rows={8}
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
              placeholder="Comments"
            ></textarea>
          </div>

          <div className="col-span-2 text-right">
            <button className="py-3 px-6 bg-gray-500 text-gray-200 font-bold w-full  ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
