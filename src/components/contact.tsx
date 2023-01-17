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
    </>
  );
};

export default Contact;
