import * as React from "react";

type Cta = {
  buttonText: string;
  url: string;
  color?: string
  style?: string;
};

const Cta = (props: Cta) => {
  const { buttonText, url, style, color } = props;

  return (
    <a
      href={url}
      className={
        `${style}` + " py-4 px-6 text-base font-bold text-white rounded-lg"
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      {buttonText}
    </a>
  );
};

export default Cta;
