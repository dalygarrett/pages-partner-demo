import * as React from "react";
import Cta from "../components/cta";
import { Address } from "@yext/pages/components";

const Contact = (props: any) => {
  const { address, phone } = props;
  const { city, countryCode, line1, line2, postalCode, region } = address;
  return (
    <>
      <div className="  gap-y-5">
        <div className="  gap-y-3">
          <div>{line1}</div>
          {line2 && <div>{line2}</div>}
          <div>
            {city}, {region} {postalCode}
          </div>
        </div>
      </div>
      <div className=" hidden md:block w-auto mt-4 text-lg  px-16 py-2 border bg-sky-700 hover:bg-sky-600 ">
        <Cta buttonText="Get directions " url="#" style="primary-cta" backgroundColor={""}></Cta>
      </div>
    </>
  );
};

export default Contact;
