import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Swiper ≥v10, check your version
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./SectionSlider.module.scss";

export default function SectionSlider({ slides }) {
  return (
    <section className={styles.sectionSlider}>
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation, Autoplay]}
        className={styles.swiper}
        speed={3000}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
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
