import styles from "./post.module.scss";

export default function Post({ title, date, post, url }) {
  return (
    <div className={styles.container}>
      <a href={url}></a>
      <div className={styles.text}>
        <h2>{title}</h2>
        <h4>{date}</h4>
      </div>
    </div>
  );
}
