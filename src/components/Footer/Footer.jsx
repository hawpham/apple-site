import FooterLg from "./FooterLg";
import FooterSm from "./FooterSm";

const footerLinks = [
  {
    group: "Shop and Learn",
    items: ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"],
  },
  {
    group: "Apple Wallet",
    items: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
  },
  {
    group: "Account",
    items: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
  },
  {
    group: "Entertainment",
    items: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"],
  },
];

export default function Footer() {
  return (
    <div>
      <FooterLg links={footerLinks} />
      <FooterSm links={footerLinks} />
    </div>
  );
}
