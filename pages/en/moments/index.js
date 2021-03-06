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
      <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Carousel />
        <hr className={styles.momentsHr} />
        <ShortAbout />
        <hr className={styles.momentsHr} />
        <Gallery imagesCount={imagesCount} />
      </motion.div>
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
