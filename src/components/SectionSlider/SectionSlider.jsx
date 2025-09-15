import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Swiper ≥v10, check your version
import "swiper/css";
import "swiper/css/pagination";
import styles from "./SectionSlider.module.scss";

export default function SectionSlider({ slides }) {
  return (
    <section className={styles.sectionSlider}>
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={styles.swiper}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 8 },
          900: { slidesPerView: 2, spaceBetween: 8 },
          // 1280: { slidesPerView: 2, spaceBetween: 10 },
          // 1520: { slidesPerView: 2, spaceBetween: 10 },
        }}
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
