import styles from "./index.module.css";

function Heading(props) {
  return (
    <div>
      <h1 className={styles.green}>{props.heading_text}</h1>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Heading heading_text="Heading" />
      <h1 className="red">Index.js</h1>
    </div>
  );
}
