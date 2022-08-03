import * as React from "react";
import Markdown from 'markdown-to-jsx';

const offerings = (props:any) => {
    const { offerings } = props;
    const offeringsDivs = offerings.map((offerings:any) => (
      <div className="bg-gray-200 p-4 rounded-lg drop-shadow-md space-y-5">
        <h3 className="text-lg font-semibold">{offerings.name}</h3>
        <p><Markdown>{offerings.richTextDescription}</Markdown></p>
      </div>
    ));


  return (
    <>
        <div>
            <h2 className="text-xl align-center text-center font-bold mb-4">Offerings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {offeringsDivs}
            </div>
        </div>
    </>
  );
};

export default offerings;