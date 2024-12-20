"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const caseStudiesData = [
  {
    image: "/images/case-studies/studie1.jpg",
    title:
      "How a Retail Chain Enhanced Customer Experience by 40% with Microsoft Dynamics 365 CRM and Power Apps",
    category: "Web, Sales",
    detailsLink: "/portfolio/ai-email-reducing-time/",
    shapeImage: "/images/case-studies/studie-shape1.png",
    aosDelay: "100",
  },
  {
    image: "/images/case-studies/studie2.jpg",
    title:
      "Is it true that a Healthcare Provider Enhanced Patient Scheduling and Reduced Wait Times by 25% Using Power Automate and Dynamics 365",
    category: "Sales, SEO, Web",
    detailsLink: "/portfolio/automating-sales-order-using-ai-email/",
    shapeImage: "/images/case-studies/studie-shape2.png",
    aosDelay: "200",
  },
  {
    image: "/images/case-studies/studie1.jpg",
    title:
      "How a global retailer achieved a 40% productivity boost using Microsoft Power Automate.",
    category: "Web, Sales",
    detailsLink: "/portfolio/ai-email-reducing-time/",
    shapeImage: "/images/case-studies/studie-shape1.png",
    aosDelay: "100",
  },
  {
    image: "/images/case-studies/studie2.jpg",
    title:
      "Simplifying project management for a construction firm with custom Power BI dashboards.",
    category: "Sales, SEO, Web",
    detailsLink: "/portfolio/automating-sales-order-using-ai-email/",
    shapeImage: "/images/case-studies/studie-shape2.png",
    aosDelay: "200",
  },
  // {
  //   image: "/images/case-studies/studie3.jpg",
  //   title: "Traffic Management",
  //   category: "Marketing",
  //   detailsLink: "/portfolio/portfolio-details/",
  //   shapeImage: "/images/case-studies/studie-shape3.png",
  //   aosDelay: "300",
  // },
];

const CaseStudies: React.FC = () => {
  return (
    <>
      <div className="case-studies-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>CASE STUDIES</h2>
            <p>
              See how our AI solutions have transformed businesses, reducing
              response times and boosting conversions.
            </p>
          </div>

          <div className="row justify-content-center">
            {caseStudiesData &&
              caseStudiesData.slice(0, 4).map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className="single-case-studies"
                    style={{ backgroundImage: `url(${value.image})` }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="content">
                      {/* <span>
                        <Link href={value.detailsLink}>{value.category}</Link>
                      </span> */}

                      <h3>
                        <Link href={value.detailsLink}>{value.title}</Link>
                      </h3>
                    </div>

                    <Link href={value.detailsLink} className="btn btn-primary">
                      View Case Study
                    </Link>

                    <div className="shape">
                      <Image
                        src={value.shapeImage}
                        alt="shape Image"
                        width={250}
                        height={250}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="view-more-work">
            <Link
              href="https://calendly.com/dhruv-aii/30mins"
              className="btn btn-primary"
            >
              Book a 1:1 Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
