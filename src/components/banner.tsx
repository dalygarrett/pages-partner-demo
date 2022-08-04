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
  description?: string;
  address?: Address;
  c_bannerImage: any;
  style?: React.CSSProperties;
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
  const { name, description, children, c_bannerImage} = props;

  return (  
    <>
      <div className="bg-no-repeat bg-center text-5xl font-bold text-white p-12 flex items-center justify-center flex-row space-x-20 w-full" 
      style={{backgroundImage: `url('${c_bannerImage.url}')`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <div className="flex-col backdrop-brightness-75 space-y-5 text-center font-extrabold outline-2">
          <div>{name}</div>
          <div className="text-2xl font-bold text-white p-6 flex items-center justify-center flex-row space-x-20 w-full">
            <div>{description}</div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Banner;
