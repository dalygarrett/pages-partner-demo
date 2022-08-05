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
      "meta",
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
  return document.slug;
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
    logo
  } = document;

  return (
    <>
      <PageLayout logo={logo} color={c_primaryColor}>
        <Banner name={name} description={description} c_bannerImage={c_bannerImage}>
        </Banner>
        <div className="centered-container">
          <div className="section">
            <div className="grid grid-cols-3 gap-x-10 gap-y-10">
              <div className="bg-gray-100 p-4 rounded-lg drop-shadow-md space-y-7">
                <Contact address={address} phone={mainPhone} color={c_primaryColor}></Contact>
                {c_offerings.name && <List list={c_offerings.name}></List>}
              </div>
              <div className="col-span-1 pt-3 space-y-5 content-center">
                  {hours && <Hours title={"Hours of Operation"} hours={hours} />}
              </div>
              <div className="col-span-1.5 space-y-10 rounded-lg drop-shadow-md">
                {geocodedCoordinate && (
                  <StaticMap
                   backgroundColor={c_primaryColor}
                   latitude={geocodedCoordinate.latitude}
                   longitude={geocodedCoordinate.longitude}
                  ></StaticMap>
                )}
              </div>
            </div>
          </div>
          <div className="section">
            <Offerings 
              offerings={c_offerings}
            ></Offerings>
          </div>
          <div className="section">
            <Faqs faqs={c_featuredFAQs}></Faqs>
          </div>
          <div className="space-y-10 m-auto bg-gray-100 w-96 rounded-lg drop-shadow-md">
            <Basic></Basic>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Location;
