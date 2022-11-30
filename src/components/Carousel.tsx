import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@yext/pages/components";
import Cta from "./cta";
import HoursText from "./HoursText";
import { BsPhone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import Product from "../types/products";
import Markdown from "markdown-to-jsx";
export interface CarouselProperties {
  data: any;
  type: "address" | "nonAddress";
  slidesToShow: number;
}
const Carousel = (props: CarouselProperties) => {
  const { data, type } = props;
  console.log(JSON.stringify(data));

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: props.slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {type !== "address" && data
        ? data.map((item: Product, index: any) => {
            console.log(item.slug);

            return (
              <div key={index} className="p-4 border">
                {item.primaryPhoto && (
                  <div className="rounded">
                    <Image image={item.primaryPhoto} />
                  </div>
                )}
                <a href={`/${item.slug}`}>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </a>
                {item.richTextDescription && (
                  <Markdown>{item.richTextDescription}</Markdown>
                )}
              </div>
            );
          })
        : data.map((item: any, index: any) => (
            <div key={index} className="p-4 border flex flex-row">
              <div className="textClass locCarSmall md:locCar  flex justify-between leading-6 font-normal mb-8">
                <div className=" text-left">
                  <div className=" text-base font-bold ">
                    {item.name} in {item.address.city}, {item.address.region}
                  </div>
                  <HoursText
                    document={{ hours: item.hours, type: "car" }}
                  ></HoursText>
                  <div className="mt-4 flex ">
                    <div className="mr-2">
                      <IoLocationOutline />
                    </div>
                    <div>
                      <div>{item.address.line1}</div>
                      {item.address.line2 && <div>{item.address.line2}</div>}
                      <div>
                        {item.address.city}, {item.address.region}{" "}
                        {item.address.postalCode}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <div className="mr-2">
                      <BsPhone />
                    </div>
                    <div>
                      {item.mainPhone &&
                        item.mainPhone
                          .replace("+1", "")
                          .replace(/\D+/g, "")
                          .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Cta
                  style="primary-cta-ov"
                  buttonText="Visit Store"
                  url={item.landingPageUrl}
                  backgroundColor={""}
                ></Cta>
              </div>
            </div>
          ))}
    </Slider>
  );
};

export default Carousel;
