/* eslint-disable react/prop-types */
/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import * as React from "react";
import Banner from "../components/banner";
import Cta from "../components/cta";
import Contact from "../components/contact";
import List from "../components/list";
import Hours from "../components/hours";
import StaticMap from "../components/static-map";
import Card from "../components/card";
import Faqs from "../components/faqs";
import Offerings from "../components/offerings";
import Basic from "../components/form";
import "../index.css";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import PageLayout from "../components/page-layout";
import { useState } from "react";
import HoursText from "../components/HoursText";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
// import { Image } from "@yext/pages/components";
import Carousel from "../components/Carousel";
import ContactUsForm from "../components/contact-us-form";
import { Image } from "@yext/pages/components";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "name",
      "address",
      "mainPhone",
      "hours",
      "slug",
      "geocodedCoordinate",
      "description",
      "services",
      "emails",
      "c_featuredFAQs.question",
      "c_featuredFAQs.answer",
      "c_offerings.name",
      "c_offerings.richTextDescription",
      "c_offerings.primaryPhoto",
      "c_bannerImage",
      "c_primaryColor",
      "photoGallery",
      "paymentOptions",
      "c_offerings.slug",
      "logo",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["location"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ? document.slug : document.id;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          description: "This site was generated by the Yext SSG",
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Location: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const cpy = document;
  const {
    _site,
    name,
    address,
    openTime,
    hours,
    mainPhone,
    description,
    geocodedCoordinate,
    c_bannerImage,
    services,
    c_offerings,
    c_featuredFAQs,
    paymentOptions,
    c_primaryColor,
    logo,
  } = document;
  const [showHours, setShowHours] = useState(false);
  const nServices = ["service 1", "service 1", "service 1"];

  return (
    <>
      <PageLayout logo={logo} color={c_primaryColor}>
        <div className="centered-container">
          <div className="section">
            <div className="mx-4 flex flex-col md:flex-row justify-between">
              <div className="flex flex-col gap-3">
                <h2 className="font-extrabold font-sans text-5xl">{name}</h2>
                <h1 className="font-semibold font-sans text-2xl mb-4">
                  {address.city}, {address.region}
                </h1>
              </div>
            </div>
            <div className="flex flex-row gap-3">
                {c_bannerImage && (
                  <div className="w-2/3 md:mr-auto md:ml-auto md:mt-auto md:mb-auto border-8 shadow-md rounded-lg">
                    <Image image={c_bannerImage}></Image>
                  </div>
                )}
              <div className="md:mr-auto md:ml-auto md:mt-auto md:mb-auto text-2xl text-gray-600 mt-4 w-full md:w-auto">
                <div className="flex gap-2 w-full">
                  <div>
                    <IoLocationOutline className="mt-2" />
                  </div>
                  <div>
                    <Contact address={address} phone=""></Contact>
                  </div>
                </div>
                <div className="flex gap-3 mt-4 items-center">
                  <div className="">
                    <BsPhone />
                  </div>
                  <div>
                    {mainPhone &&
                      mainPhone
                        .replace("+1", "")
                        .replace(/\D+/g, "")
                        .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
                  </div>
                </div>
                <div className=" flex flex-col gap-4 p-4">
                <div className="text-black w-auto mt-6 text-center shadow-md px-16 py-2 border-2 border-black rounded-xl bg-gray-200 hover:bg-gray-300 ">
                  <Cta
                    buttonText="Get Directions"
                    url="#"
                    style="primary-cta"
                    backgroundColor={""}
                  ></Cta>
                  </div>
                  <div className="text-black w-auto mt-6 text-center shadow-md px-16 py-2 border-2 border-black rounded-xl bg-gray-200 hover:bg-gray-300 ">
                    <Cta
                      buttonText="Call Now"
                      url="#"
                      style="primary-cta"
                      backgroundColor={""}
                    ></Cta>
                    </div>
                </div>
              </div>
            </div>
    
            <div className="flex flex-col md:flex-row px-8 gap-3 mt-4 justify-between">
              {hours && (
                <div className="md:ml-auto md:mr-auto md:mt-auto md:mb-auto">
                  <div className="flex gap-3 items-center">
                    <HoursText document={cpy}></HoursText>
                  </div>
                  <span className=" md:block">
                    <Hours title={""} hours={hours} />
                    {showHours && (
                      <div className="mt-4 ml-4">
                        <Hours title={"Store Hours"} hours={hours} />
                      </div>
                    )}
                  </span>
                </div>
              )}
              <div className="w-2/5 md:ml-auto md:mr-auto md:mt-auto md:mb-auto mx-4 hidden shadow-md md:block">
                {geocodedCoordinate && (
                  <StaticMap
                    latitude={geocodedCoordinate.latitude}
                    longitude={geocodedCoordinate.longitude}
                    backgroundColor={""}
                  ></StaticMap>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="centered-container">
          <div className="section">
            {description && (
              <div className="w-full rounded-xl md:w-2/2 shadow-md bg-gray-200 mt-4">
                <div className="p-4 w-full mx-auto text-center mb-10 ">
                  <h1 className="text-2xl font-bold border-b border-black mb-4 pb-4">
                    About Us
                  </h1>
                  <div className="bg-grey-100 text-left mt-4">
                    {description}
                  </div>
                </div>
              </div>
            )}
            {c_featuredFAQs && <Faqs faqs={c_featuredFAQs} />}
            {/* {c_offerings && (
              <div className="w-full  mt-4">
                <div className="p-4 w-full mx-auto text-center mb-10 ">
                  <div className="w-full justify-center items-center text-black  ">
                    <div>
                      <h1 className="text-2xl font-bold  pb-4">
                        Products offered
                      </h1>
                    </div>
                  </div>
                  <div className="bg-grey-100 locSlick ">
                    <Carousel
                      data={c_offerings}
                      slidesToShow={4}
                      type="nonAddress"
                    ></Carousel>
                  </div>
                </div>
              </div>
            )} */}
            <div className="mt-10 w-3/4 mx-auto">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Location;
