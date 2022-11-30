import * as React from "react";

type Cta = {
  buttonText?: string;
  url?: string;
  backgroundColor: string;
  style?: any;
  className?: any;
};

const Cta = (props: Cta) => {
  const { buttonText, url, className } = props;

  return (
    <a
      href={url}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {buttonText}
    </a>
  );
};

export default Cta;
