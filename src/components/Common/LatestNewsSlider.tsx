"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const latestNewsSliderData = [
  {
    image: "/images/blog/blog1.jpg",
    title: "The Most Popular New top Business Apps",
    date: "Feb 15, 2023",
    category: "Technology",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    readMoreLink: "/blog/blog-details/",
  },
  {
    image: "/images/blog/blog2.jpg",
    title: "The Best Marketing top use Management Tools",
    date: "Feb 16, 2023",
    category: "Agency",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    readMoreLink: "/blog/blog-details/",
  },
  {
    image: "/images/blog/blog3.jpg",
    title: "3 WooCommerce Plugins to Boost Sales",
    date: "Feb 17, 2023",
    category: "IT Agency",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    readMoreLink: "/blog/blog-details/",
  },
  {
    image: "/images/blog/blog4.jpg",
    title: "Top 21 Must-Read Blogs For Creative Agencies",
    date: "Feb 18, 2023",
    category: "Development",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    readMoreLink: "/blog/blog-details/",
  },
];

const LatestNewsSlider: React.FC = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Blogs</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          <Swiper
            autoHeight={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="blog-slides"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {latestNewsSliderData &&
              latestNewsSliderData.slice(0, 5).map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href={value.readMoreLink}>
                        <Image
                          src={value.image}
                          alt="image"
                          width={510}
                          height={383}
                        />
                      </Link>

                      <div className="post-tag">
                        <Link href={value.readMoreLink}>{value.category}</Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">{value.date}</span>
                      <h3>
                        <Link href={value.readMoreLink}>{value.title}</Link>
                      </h3>

                      <p>{value.shortText}</p>

                      <Link href={value.readMoreLink} className="read-more-btn">
                        Read More
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default LatestNewsSlider;
