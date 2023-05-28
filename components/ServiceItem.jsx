import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServiceItem = ({
  id,
  heading,
  title,
  img,
  description,
  featureHeading1,
  featureImg1,
  featureParagraph1,
  featureHeading2,
  featureImg2,
  featureParagraph2,
  featureHeading3,
  featureImg3,
  featureParagraph3,
  featureHeading4,
  featureImg4,
  featureParagraph4,
}) => {
  return (
    <div key={id} className="mb-20">
      <h1 className="text-3xl mb-4 text-center font-bold">{heading}</h1>

      <div className="flex max-md:flex-col-reverse">
        <article className="md:basis-1/2 flex flex-col gap-5 justify-center">
          <h2 className="text-2xl font-medium"> {title} </h2>
          <p> {description} </p>
          <div>
            <Link
              href="/contact"
              className="bg-[#157347] text-white px-6 py-2 rounded-[60px] font-medium"
            >
              Quick Enquiry
            </Link>
          </div>
        </article>
        <figure className="md:basis-1/2">
          <Image
            width={120}
            height={120}
            src={img}
            className="w-full"
            alt="coming soon"
          />
        </figure>
      </div>
      <div className="text-center my-8">
        <h2 className="text-xl">Features</h2>
      </div>
      <div className="flex flex-wrap">
        <div className="flex items-center gap-3 md:basis-1/2 py-3">
          <Image width={60} height={60} src={featureImg1} className="" alt="" />
          <article className="flex flex-col">
            <h3 className="font-semibold text-lg">{featureHeading1}</h3>
            <p> {featureParagraph1} </p>
          </article>
        </div>
        <div className="flex items-center gap-3 md:basis-1/2 py-3">
          <Image width={60} height={60} src={featureImg2} className="" alt="" />
          <article className="flex flex-col">
            <h3>{featureHeading2}</h3>
            <p> {featureParagraph2} </p>
          </article>
        </div>
        <div className="flex items-center gap-3 md:basis-1/2 py-3">
          <Image width={60} height={60} src={featureImg3} className="" alt="" />
          <article className="flex flex-col">
            <h3>{featureHeading3}</h3>
            <p> {featureParagraph3} </p>
          </article>
        </div>
        <div className="flex items-center gap-3 md:basis-1/2 py-3">
          <Image width={60} height={60} src={featureImg4} className="" alt="" />
          <article className="flex flex-col">
            <h3>{featureHeading4}</h3>
            <p> {featureParagraph4} </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
