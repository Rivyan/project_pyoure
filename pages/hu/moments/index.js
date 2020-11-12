import styles from "./index.module.scss";
import Carousel from "./components/carousel";
import ShortAbout from "./components/short_about";
import Gallery from "./components/gallery";
import { getImageFolderLength } from "../../../lib/gallery_file_count";
import Layout from "./layout";
import { motion } from "framer-motion";

export default function Index({ imagesCount }) {
  return (
    <Layout>
      <Carousel />
      <hr className={styles.momentsHr} />
      <ShortAbout />
      <hr className={styles.momentsHr} />
      <Gallery imagesCount={imagesCount} />
    </Layout>
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
