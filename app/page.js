import React from "react";
import Image from "next/image";
import { HomeServicesData } from "@/data";
import HowWeWork from "@/components/HowWeWork";
import { HowWeWorkData } from "@/data";
import Link from "next/link";
import { ImArrowRight2 } from "react-icons/im";

const Home = () => {
  return (
    <>
      <section>
        <Image
          style={{ filter: "brightness(0.8)" }}
          className="!w-full max-h-[85vh] backdrop-brightness-75"
          src="/banner.png"
          width={1530}
          height={380}
          alt=""
        />
      </section>

      <section className="flex max-md:flex-col gap-6 md:gap-12 p-5">
        <article className="basis-1/2 ">
          <h1 className="text-2xl md:text-right md:text-3xl  xl:text-4xl font-bold">
            Accelerate your
            <span className="text-primary">
              {" "}
              digital <br className="max-md:hidden" /> branding{" "}
            </span>
            with us
          </h1>
        </article>
        <article className="basis-1/2">
          <p className="md:pr-8">
            Our experienced team is here to utilize valuable resources
            efficiently that ensures client satisfaction. We guarantee you that
            our services will set exceptional growth for your business.
          </p>
        </article>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-between gap-8">
            {HomeServicesData.map(({ id, title, img, paragraph }) => {
              return (
                <div
                  key={id}
                  className="md:w-[45%] 2xl:w-[30%] hover:bg-primary transition-all duration-200 delay-100 ease-linear hover:outline outline-1"
                >
                  <div className="h-full p-3 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                      className="w-[75px] h-[75px] ml-3"
                      src={img}
                      alt="blog"
                      width={90}
                      height={90}
                    />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
                        {title}
                      </h1>
                      <p className="leading-relaxed text-black mb-3">
                        {paragraph.length > 200
                          ? paragraph.slice(0, 200) + "..."
                          : paragraph}
                      </p>
                      <div className="flex items-center flex-wrap">
                        <Link
                          href={"services"}
                          className="text-black flex items-center gap-2"
                        >
                          Read More <ImArrowRight2 />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-secondary text-light px-5 my-20">
        <div className="container mt-5 py-12 mx-auto">
          <div className="flex max-md:flex-col gap-0 mx-auto max-md:gap-12 ">
            <div className="basis-1/2 ">
              <Image
                src="/android-ios.png"
                width={519}
                height={463}
                className="object-contain mx-auto"
                alt=""
              />
            </div>
            <div className="basis-1/2 flex flex-col gap-3 justify-center">
              <h2 className="text-white text-xl font-semibold">
                Web Design and Development
              </h2>
              <p className="text-white">
                We are proven market leader in the sector of mobile application
                development. We do not only develop mobile application for you
                but also help you in understanding the practical feasibility and
                implementation of mobile apps that you are looking for.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container px-5 mx-auto">
          <h1 className="md:text-center my-4 text-4xl md:text-5xl ">
            {" "}
            <span className="text-primary">H</span>ow We Work ?
          </h1>{" "}
          <p className="md:text-center my-4">
            {" "}
            Level up your team with Technical Backers. Choose the engagement
            model that makes sense for you.{" "}
          </p>
          <div className="flex justify-between max-md:flex-col gap-8 my-12">
            {HowWeWorkData.map((item) => (
              <HowWeWork key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
