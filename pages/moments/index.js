import styles from "./index.module.css";
import Navigation from "./components/navbar";
import Carousel from "./components/carousel";
import ShortAbout from "./components/short_about";
import Gallery from "./components/gallery";

export default function Index() {
  return (
    <div>
      <Navigation />
      <Carousel />
      <hr className={styles.momentsHr} />
      <ShortAbout />
      <hr className={styles.momentsHr} />
      <Gallery />
    </div>
  );
}
