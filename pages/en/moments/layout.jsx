import styles from "./layout.module.scss";
import Navbar from "./components/navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className={styles.momentsWrap}>
      <div className={styles.momentsDiv}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
