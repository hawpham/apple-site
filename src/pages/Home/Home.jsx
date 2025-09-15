import CardProduct from "../../components/CardProduct/CardProduct";
import HeroSection from "../../components/HeroSection/HeroSection";
import SectionAutoSlider from "../../components/SectionAutoSlider/SectionAutoSlider";
import SectionSlider from "../../components/SectionSlider/SectionSlider";
import SectionFullWidth from "../../layouts/SectionFullWidth/SectionFullWidth";
import SectionGrid from "../../layouts/SectionGrid/SectionGrid";
import styles from "./Home.module.scss";

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
      </SectionGrid>

      <SectionSlider slides={slideItems} />
      <SectionAutoSlider slides={autoSlideItems} />

      {/* <SectionFullWidth>
        <CardProduct
          title="iPhone Air"
          description={`The thinnest iPhone ever.${(<br />)} With the power of pro inside.`}
          announce="Available starting 9.19"
          backgroundImage="/assets/products/hero_iphone_air_preorder.jpg"
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
          backgroundImage="/assets/products/hero_iphone_17_preorder.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
      </SectionFullWidth> */}

      {/* <SectionGrid>
        <CardProduct
          title="iPhone Air"
          description={`The thinnest iPhone ever.${(<br></br>)} With the power of pro inside.`}
          announce="Available starting 9.19"
          backgroundImage="/assets/products/promo_airpodspro_3_preorder.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
      </SectionGrid>

      <SectionGrid>
        <CardProduct
          title="AirPods Pro 3"
          description="The world’s best in-ear Active Noise Cancellation."
          announce="Available starting 9.19"
          backgroundImage="/assets/products/promo_airpodspro_3_preorder.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
        <CardProduct
          title="AirPods Pro 3"
          description="The world’s best in-ear Active Noise Cancellation."
          announce="Available starting 9.19"
          backgroundImage="/assets/products/promo_airpodspro_3_preorder.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
      </SectionGrid> */}

      {/* <ProductGridLayout>
        <CardProduct
          title="AirPods Pro 3"
          description="The world’s best in-ear Active Noise Cancellation."
          announce="Available starting 9.19"
          backgroundImage="/assets/products/promo_airpodspro_3_preorder.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
        <CardProduct
          title="AirPods Pro 3"
          description="The world’s best in-ear Active Noise Cancellation."
          announce="Available starting 9.19"
          backgroundImage="/assets/products/promo_airpodspro_3_preorder.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        /> 
      </ProductGridLayout> */}
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Welcome to Apple Clone</h2>
        <p>Explore our latest products and innovations.</p>
      </section>
    </>
  );
}
