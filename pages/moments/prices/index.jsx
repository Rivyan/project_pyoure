import { CardDeck } from "react-bootstrap";
import Navigation from "../components/navbar";
import Footer from "../footer";
import PriceCard from "./components/price_card";
import styles from "./index.module.scss";

export default function Prices() {
  return (
    <div>
      <Navigation />
      <CardDeck className={styles.deckContainer}>
        <PriceCard
          imgSrc="/moments_gallery/gallery_img_10.png"
          cardTitle="Outdoor Family Session"
          cardBody={
            <>
              <ul>
                <li> 15 retouched photo: 40.000 Huf</li>
                <li> 20 retouched photo: 45.000 Huf</li>
                <li> 25 retouched photo: 50.000 Huf</li>
                <li> Any extra photo: 2.500 Huf/image</li>
              </ul>
            </>
          }
        />
        <PriceCard
          imgSrc="/moments_gallery/gallery_img_2.png"
          cardTitle="Studio Family Session"
          cardBody={
            <>
              <ul>
                <li> 15 retouched photo: 55.000 Huf</li>
                <li> 20 retouched photo: 60.000 Huf</li>
                <li> 25 retouched photo: 65.000 Huf</li>
                <li> Any extra photo: 2.500 Huf/image</li>
                <li> Makeup Artist: 15.0000 Huf</li>
              </ul>
              <p> The above prices include the renting of a studio</p>
            </>
          }
        />
      </CardDeck>
      <CardDeck className={styles.deckContainer}>
        <PriceCard
          imgSrc="/moments_gallery/gallery_img_8.png"
          cardTitle="Outdoor Pregnancy Photo Session"
          cardBody={
            <>
              <ul>
                <li> 10 retouched photo: 40.000 Huf</li>
                <li> 15 retouched photo: 45.000 Huf</li>
                <li> 20 retouched photo: 50.000 Huf</li>
                <li> Any extra photo: 2.500 Huf/image</li>
                <li> Makeup Artist: 15.0000 Huf</li>
              </ul>
            </>
          }
        />
        <PriceCard
          imgSrc="/moments_gallery/gallery_img_3.png"
          cardTitle="Studio Pregnancy Photo Session"
          cardBody={
            <>
              <ul>
                <li> 10 retouched photo: 55.000 Huf</li>
                <li> 15 retouched photo: 60.000 Huf</li>
                <li> 20 retouched photo: 65.000 Huf</li>
                <li> Any extra photo: 2.500 Huf/image</li>
                <li> Makeup Artist: 15.0000 Huf</li>
              </ul>
              <p> The above prices include the renting of a studio</p>
            </>
          }
        />
      </CardDeck>
      <Footer />
    </div>
  );
}
