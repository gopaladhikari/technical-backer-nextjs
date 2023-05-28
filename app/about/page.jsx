import React from "react";
import Image from "next/image";
import { ImOffice } from "react-icons/im";
import { AiFillEye } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineTeam } from "react-icons/ai";
import { FaCode } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section className="container mx-auto p-5">
        <div className="flex max-md:flex-col gap-8">
          <figure className="basis-1/2">
            <Image
              src="https://softbenz.com/uploads/settings/about-image-1620164239.svg"
              width={120}
              height={120}
              className="w-full"
              alt=""
            />
          </figure>
          <article className="basis-1/2 flex flex-col gap-4 justify-center">
            <h1 className="text-3xl font-semibold">About Us</h1>
            <h1 className="text-5xl">
              Inspiring businesses <span className="text-primary">with IT</span>{" "}
            </h1>
            <h1 className="text-primary text-5xl">Solutions</h1>
            <p className="">
              Technical Backers is a{" "}
              <span className=""> revenue-based project company</span>{" "}
              specializing in the <span className=""> IT sector</span> . We are
              especially working in the field of{" "}
              <span className="">website design and software development</span>
              .Not only that, our other services include{" "}
              <span className="">
                mobile app development, and graphics designing
              </span>{" "}
              . We are your best IT partner and believe that website are the
              only ways to promote ging businesses digitally. Our B2B (Business
              to Business) company aims at transforming and updating tech
              services to deliver quality outputs. Technical Backers is the only
              choice for your web problems due to brilliant teamwork, passionate
              team members, and first-class service delivery. The company has
              proved to be award-winning technology solutions to clients. Our
              projects are fully successful in terms of time, cost, design, and
              performance.
            </p>
          </article>
        </div>
      </section>
      <section className="bg-[#F5F8FC] p-5">
        <div className="container mx-auto flex max-md:flex-col gap-8 py-16">
          <div className="flex gap-6 flex-col">
            <ImOffice className="text-4xl" />
            <article>
              <h4 className="font-medium  text-xl">Our Mission</h4>
              <p className="">
                We directly approach our goal and prove to be best with our
                clients by evaluating their resources in the best possible way.
                We are in the developing stage but never showcase it as our
                limitations. Our business empowers you and your company in the
                right manner so that there is a long-term relationship between
                clients, employees, and other stakeholders.
              </p>
            </article>
          </div>
          <div className="flex gap-6 flex-col">
            <AiFillEye className="text-4xl" />
            <article>
              <h4 className="font-medium text-xl">Our Vision</h4>
              <p className="">
                Our effort is endless to make Technical Backers a systematic and
                qualitative company in the IT sector. Every business requires
                digital identification in today’s era. Websites is not a luxury
                but a necessity for your brand identification. Website is the
                most reliable tool for digital marketing which is even suggested
                by legal authorities.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="my-8">
        <div className="container mx-auto p-5">
          <h1 className="text-5xl md:text-center">
            Why <span className="o"> Choose Us</span>{" "}
          </h1>
          <p className="md:text-center my-4">
            Our IT services consist of business and technology experts who help
            to manage business processes of all categories.
          </p>
          <div className="flex">
            <div className="p-4 flex flex-col gap-6">
              <FiPhoneCall className="text-4xl" />
              <article>
                <h4 className="text-xl font-semibold">Regular Support</h4>
                <p className="">
                  We assure you that our team is here to promote your regular
                  and continuous development even in a difficult situation. It
                  includes continuous feedback, quality maintenance, and
                  constant motivation to generate qualitative output.{" "}
                </p>
              </article>
            </div>
            <div className="p-4 flex flex-col gap-6">
              <AiOutlineTeam className="text-4xl" />
              <article>
                <h4 className="text-xl font-semibold">Experienced Team</h4>
                <p className="">
                  Technical Backers always selects experienced professionals as
                  its team member who can bring positive changes to the
                  company’s working conditions. We assure you that our members
                  possess technical, conceptual, and human skills.
                </p>
              </article>
            </div>
            <div className="p-4 flex flex-col gap-6">
              <FaCode className="text-4xl" />
              <article>
                <h4 className="text-xl font-semibold">Top Code Quality</h4>
                <p className="">
                  Our high code quality is important to determine the overall
                  status of your project. Quality is the basis to measure how
                  safe, secure and reliable your codebase is. Maintenance of
                  high quality is not difficult for Technical Backers to develop
                  safety-critical systems on your project.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
