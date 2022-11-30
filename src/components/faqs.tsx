import * as React from "react";
import Markdown from "markdown-to-jsx";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
const Faqs = (props: any) => {
  const { faqs } = props;

  return (
    <>
      <div>
        <h2 className="text-xl align-center text-center font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <Accordion allowZeroExpanded>
          {faqs.map((item: any, index: number) => (
            <AccordionItem
              key={index}
              className="my-4 py-4 border-b  border-black text-left"
            >
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span className="font-bold">{item.question}</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Markdown>{item.answer}</Markdown>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Faqs;
