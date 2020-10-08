import styles from "./index.module.scss";
import Navigation from "./components/navbar";
import Carousel from "./components/carousel";
import ShortAbout from "./components/short_about";
import Gallery from "./components/gallery";
import { getImageFolderLength } from "../../lib/gallery_file_count";

export default function Index({ imagesCount }) {
  return (
    <div className={styles.momentsDiv}>
      <Navigation />
      <Carousel />
      <hr className={styles.momentsHr} />
      <ShortAbout />
      <hr className={styles.momentsHr} />
      <Gallery imagesCount={imagesCount} />
    </div>
  );
}

export async function getStaticProps() {
  const imagesCount = getImageFolderLength();
  return {
    props: {
      imagesCount,
    },
  };
}
