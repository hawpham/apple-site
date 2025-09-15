import CardProduct from "../../components/CardProduct/CardProduct";
import HeroSection from "../../components/HeroSection/HeroSection";
import SectionAutoSlider from "../../components/SectionAutoSlider/SectionAutoSlider";
import SectionSlider from "../../components/SectionSlider/SectionSlider";
import SectionFullWidth from "../../layouts/SectionFullWidth/SectionFullWidth";
import SectionGrid from "../../layouts/SectionGrid/SectionGrid";
// import styles from "./Home.module.scss";

export default function Home() {
  const slideItems = [
    <img src="/assets/slides/slide-item-01.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />,
    <img src="/assets/slides/slide-item-01.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />,
    <img src="/assets/slides/slide-item-01.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />,
    <img src="/assets/slides/slide-item-01.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />,
    <img src="/assets/slides/slide-item-01.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />,
    <img src="/assets/slides/slide-item-01.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />,
    <img src="/assets/slides/slide-item-01.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />,
    // Hoặc dùng <YourCardComponent ... /> nếu muốn!
  ];
  const autoSlideItems = [
    <img src="/assets/slides/slides-auto/slide-a-01.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />,
    <img src="/assets/slides/slides-auto/slide-a-01.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />,
    <img src="/assets/slides/slides-auto/slide-a-01.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />,
    <img src="/assets/slides/slides-auto/slide-a-01.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />,
    <img src="/assets/slides/slides-auto/slide-a-01.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />,
    <img src="/assets/slides/slides-auto/slide-a-01.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />,
    <img src="/assets/slides/slides-auto/slide-a-01.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />,
    // Hoặc dùng <YourCardComponent ... /> nếu muốn!
  ];
  return (
    <>
      <SectionFullWidth>
        <HeroSection />
      </SectionFullWidth>
      <SectionFullWidth>
        <CardProduct
          title="iPhone 17 Pro"
          description="All out Pro."
          announce="Available starting 9.19"
          imageLg="/assets/products/hero_iphone_17_pro_preorder.jpg"
          imageSm="/assets/products/sm/hero_iphone_17_pro_preorder_sm.jpg"
          dark
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
      </SectionFullWidth>

      <SectionFullWidth>
        <CardProduct
          title="iPhone Air"
          description="The thinnest iPhone ever."
          announce="Available starting 9.19"
          imageLg="/assets/products/hero_iphone_air_preorder.jpg"
          imageSm="/assets/products/sm/hero_iphone_air_preorder_sm.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
      </SectionFullWidth>

      <SectionFullWidth>
        <CardProduct
          title="iPhone 17"
          description="Magichromatic"
          announce="Available starting 9.19"
          imageLg="/assets/products/hero_iphone_17_preorder.jpg"
          imageSm="/assets/products/sm/hero_iphone_17_preorder_sm.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
      </SectionFullWidth>
      <SectionGrid>
        <CardProduct
          title="iPhone 17"
          description="Magichromatic"
          announce="Available starting 9.19"
          imageLg="/assets/products/promo_airpodspro_3_preorder.jpg"
          imageSm="/assets/products/sm/promo_airpodspro_3_preorder_sm.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
        <CardProduct
          title="Apple Watch Series 11"
          description="The ultimate way to watch your health."
          announce="Available starting 9.19"
          imageLg="/assets/products/promo_apple_watch_series_11_preorder.jpg"
          imageSm="/assets/products/sm/promo_apple_watch_series_11_preorder_sm.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
        <CardProduct
          title="Apple Watch SE 3"
          description="Walk it. Talk it. Track it. Love it."
          announce="Available starting 9.19"
          imageLg="/assets/products/promo_apple_watch_se_3_preorder.jpg"
          imageSm="/assets/products/sm/promo_apple_watch_se_3_preorder_sm.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
        <CardProduct
          title="Apple Watch Ultra 3"
          description="Personal beast."
          announce="Available starting 9.19"
          imageLg="/assets/products/promo_apple_watch_ultra3_preorder.jpg"
          imageSm="/assets/products/sm/promo_apple_watch_ultra3_preorder_sm.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
        <CardProduct
          title="Any condition carrier deals are here."
          description="Select carriers accept eligible trade-in devices in any condition. Other offers available."
          announce=""
          imageLg="/assets/products/promo_carrier_01.jpg"
          imageSm="/assets/products/sm/promo_carrier_01_sm.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
        <CardProduct
          title="Apple Trade In"
          description="Get up to $200–$700 in credit when you trade in iPhone 13 or higher."
          announce=""
          imageLg="/assets/products/promo_iphone_tradein.jpg"
          imageSm="/assets/products/sm/promo_iphone_tradein_sm.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
      </SectionGrid>

      <SectionSlider slides={slideItems} />
      <SectionAutoSlider slides={autoSlideItems} />

      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Welcome to Apple Clone</h2>
        <p>Explore our latest products and innovations.</p>
      </section>
    </>
  );
}
