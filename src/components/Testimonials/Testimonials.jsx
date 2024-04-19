import shapeTwo from "../../assets/home/shape-2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import classes from "./testimonials.module.css";
import { testimonials } from "../../assets/data/data";
import testIcon from "../../assets/testimonials/testimonials-icon.svg";

const Testimonials = () => {
  const container = "container";
  return (
    <div className={classes.testimonialsPage}>
      <section
        className={`${container} ${classes.testimonials}`}
        id="testimonials"
      >
        <h2 className="sectionTitle">Testimonials</h2>
        <p className="sectionSubtitle">
          My <span>Traits</span>
        </p>
        <div className={classes.testimCont}>
          <Swiper
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              960: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1400: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonials.map(({ author, name, description, id, img }) => (
              <SwiperSlide className={classes.testimonialsCard} key={id}>
                <div className={classes.header}>
                  <div className={classes.testIcon}>
                    <img src={testIcon} alt="testimonial icon" />
                  </div>
                  <img
                    src={img}
                    alt="testimonial image"
                    className={classes.testimImg}
                  />
                </div>
                <h3 className={classes.testName}>{name}</h3>
                <p className={classes.testAuthor}>{author}</p>
                <p className={classes.testDescriotion}>{description}</p>
                <img src={shapeTwo} alt="shape image" className="shape" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};
export default Testimonials;
