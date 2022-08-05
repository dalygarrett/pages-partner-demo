import * as React from "react";
import Cta from "../components/cta";

type Address = {
  line1: string;
  line2?: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};

const renderPrettyAddress = (address: Address) => {
  return (
    <>
      <div>{address.line1}</div>
      <div>
        {address.city}, {address.region}
      </div>
    </>
  );
};

const Contact = (props: any) => {
  const { address, phone, color} = props;

  return (
    <>
      <div className="grid gap-y-5">
        <div className="text-xl font-bold">Contact</div>
        <div className="grid gap-y-3">
          <div className="font-semibold">{renderPrettyAddress(address)}</div>
        </div>
        <div className="w-30 space-y-10">
          <Cta buttonText="Call Now" url="#" backgroundColor={color}></Cta>
          <div>
            <Cta buttonText="Get Directions" url="#" backgroundColor={color}></Cta>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
