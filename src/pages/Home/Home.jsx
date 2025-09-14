import CardProduct from "../../components/CardProduct/CardProduct";
import HeroSection from "../../components/HeroSection/HeroSection";
import IPhoneAirSection from "../../components/ProductsSection/IPhoneAirSection/IPhoneAirSection";
import IPhone17Section from "../../components/ProductsSection/iPhone17Section/iPhone17Section";
import ProductGridLayout from "../../layouts/ProductGridLayout";
import SectionFullWidth from "../../layouts/SectionFullWidth/SectionFullWidth";
import SectionGrid from "../../layouts/SectionGrid/SectionGrid";
// import ProductsGridSection from "../../layouts/ProductsGridLayout";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <SectionFullWidth>
        <HeroSection />
      </SectionFullWidth>
      <SectionFullWidth>
        <CardProduct
          title="iPhone 17 Pro"
          description="All out Pro."
          announce="Available starting 9.19"
          image="/assets/products/hero_iphone_17_pro_preorder.jpg"
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
          image="/assets/products/hero_iphone_air_preorder.jpg"
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
          image="/assets/products/hero_iphone_17_preorder.jpg"
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
          image="/assets/products/promo_airpodspro_3_preorder.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
        <CardProduct
          title="iPhone 17"
          description="Magichromatic"
          announce="Available starting 9.19"
          image="/assets/products/promo_airpodspro_3_preorder.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
        <CardProduct
          title="iPhone 17"
          description="Magichromatic"
          announce="Available starting 9.19"
          image="/assets/products/promo_airpodspro_3_preorder.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
        <CardProduct
          title="iPhone 17"
          description="Magichromatic"
          announce="Available starting 9.19"
          image="/assets/products/promo_airpodspro_3_preorder.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
        <CardProduct
          title="iPhone 17"
          description="Magichromatic"
          announce="Available starting 9.19"
          image="/assets/products/promo_airpodspro_3_preorder.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
        <CardProduct
          title="iPhone 17"
          description="Magichromatic"
          announce="Available starting 9.19"
          image="/assets/products/promo_airpodspro_3_preorder.jpg"
          buttons={[
            { label: "Learn more", href: "#", variant: "primary" },
            { label: "Pre-order", href: "#", variant: "outline" },
          ]}
        />
      </SectionGrid>

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
    </div>
  );
}
