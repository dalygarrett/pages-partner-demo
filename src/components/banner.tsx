import * as React from "react";

export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};

type Banner = {
  name?: string;
  address?: Address;
  openTime?: string;
  children?: React.ReactNode;
};

const renderPrettyAddress = (address?: Address) => {
  return (
    <>
      {address && (
        <span>
          {address.line1} in {address.city}, {address.region}
        </span>
      )}
    </>
  );
};

const Banner = (props: Banner) => {
  const { name, address, children } = props;

  return (
    <>
      <div className="bg-no-repeat bg-center bg-[url('https://houstonagentmagazine.com/wp-content/uploads/sites/7/2021/02/GettyImages-1269776313-scaled.jpg.optimal.jpg')] text-5xl font-bold text-white p-10 flex items-center justify-center flex-row space-x-20 w-full">
        <div className="flex-col space-y-10 text-center outline-2">
          <div>{name}</div>
          <div className="text-2xl font-normal text-white p-6 flex items-center justify-center flex-row space-x-20 w-full">
            <div>Hinkle Roofing has the products and services that can help you create the home you’ve always wanted, without all the work, from top to bottom.</div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Banner;
