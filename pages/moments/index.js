import styles from "./index.module.css";
import Navigation from "./components/navbar";
import Carousel from "./components/carousel";

export default function Index() {
  return (
    <div>
      <Navigation />
      <Carousel />
    </div>
  );
}
