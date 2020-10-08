import styles from "./index.module.scss";
import Navigation from "./components/navbar";
import Carousel from "./components/carousel";
import ShortAbout from "./components/short_about";
import Gallery from "./components/gallery";

export default function Index() {
  return (
    <div className={styles.momentsDiv}>
      <Navigation />
      <Carousel />
      <hr className={styles.momentsHr} />
      <ShortAbout />
      <hr className={styles.momentsHr} />
      <Gallery />
    </div>
  );
}
