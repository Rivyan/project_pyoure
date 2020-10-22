import styles from "./footer.module.scss";

export default function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <div className={styles.footerDiv} align="center">
      <p className={styles.footerText}>
        All right reserved. All images and all text on this site are the
        copyright of Viktória Márkus ©{currentDate}
      </p>
    </div>
  );
}
