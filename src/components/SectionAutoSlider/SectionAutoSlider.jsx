import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import styles from "./SectionAutoSlider.module.scss";

export default function SectionAutoSlider({ slides }) {
  return (
    <section className={styles.sectionSlider}>
      <Swiper
        modules={[Autoplay, FreeMode, Pagination]}
        slidesPerView={4}
        spaceBetween={28}
        freeMode={true}
        speed={12000}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          1200: { slidesPerView: 4, spaceBetween: 28 },
          900: { slidesPerView: 3, spaceBetween: 18 },
          600: { slidesPerView: 2, spaceBetween: 12 },
          0: { slidesPerView: 1, spaceBetween: 8 },
        }}
        grabCursor={true}
        allowTouchMove={true}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className={styles.slide}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
