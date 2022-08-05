import * as React from "react";

type Cta = {
  buttonText?: string;
  url?: string;
  backgroundColor: string;
  style?: any;
};

const Cta = (props: Cta) => {
  const { buttonText, url, style, backgroundColor } = props;

  return (
    <a
      href={url}
      className={" py-4 px-6 text-base font-bold text-white rounded-lg"}
      style={{ background: backgroundColor }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {buttonText}
    </a>
  );
};

export default Cta;
