import * as React from "react";
import Markdown from 'markdown-to-jsx';

const Offerings = (props:any) => {
    const { offerings, height, width } = props;
    const offeringDivs = offerings.map((offering:any) => (
      <div className="bg-gray-100 p-4 rounded-lg drop-shadow-md space-y-5">
        <div>
            <img
                height={height}
                src={offering.primaryPhoto.image.url} // use normal <img> attributes as props
                className="image rounded"
                width={width}
            >
            </img>
        </div>
        <h3 className="text-lg font-semibold">{offering.name}</h3>
        <p><Markdown>{offering.richTextDescription}</Markdown></p>
      </div>
    ));


  return (
    <>
        <div>
            <h2 className="text-xl align-center text-center font-bold mb-4">Featured Offerings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {offeringDivs}
            </div>
        </div>
    </>
  );
};

export default Offerings;