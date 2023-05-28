import React from "react";
import ServiceItem from "@/components/ServiceItem";
import { servicesData } from "@/data";

const Services = () => {
  return (
    <section className="mb-16">
      <div className="container mx-auto p-5">
        {servicesData.map((item) => (
          <ServiceItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Services;
