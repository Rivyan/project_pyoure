import { CardDeck } from "react-bootstrap";
import Layout from "../layout";
import PriceCard from "./components/price_card";
import styles from "./index.module.scss";

export default function Prices() {
  return (
    <Layout>
      <CardDeck className={styles.deckContainer}>
        <PriceCard
          imgSrc="/moments_gallery/gallery_img_10.png"
          cardTitle="Outdoor Family Session"
          cardBody={
            <div className={styles.cardList}>
              <ul>
                <li> 15 retouched photo: 40.000 HUF</li>
                <li> 20 retouched photo: 45.000 HUF</li>
                <li> 25 retouched photo: 50.000 HUF</li>
                <li> Any extra photo: 2.500 HUF/image</li>
              </ul>
            </div>
          }
        />
        <PriceCard
          imgSrc="/moments_gallery/gallery_img_2.png"
          cardTitle="Studio Family Session"
          cardBody={
            <div className={styles.cardList}>
              <ul>
                <li> 15 retouched photo: 55.000 HUF</li>
                <li> 20 retouched photo: 60.000 HUF</li>
                <li> 25 retouched photo: 65.000 HUF</li>
                <li> Any extra photo: 2.500 HUF/image</li>
                <li> Makeup Artist: 15.0000 HUF</li>
              </ul>
              <p> The prices above include the costs of renting a studio</p>
            </div>
          }
        />
      </CardDeck>
      <CardDeck className={styles.deckContainer}>
        <PriceCard
          imgSrc="/moments_gallery/gallery_img_6.png"
          cardTitle="Outdoor Pregnancy Photo Session"
          cardBody={
            <div className={styles.cardList}>
              <ul>
                <li> 10 retouched photo: 40.000 HUF</li>
                <li> 15 retouched photo: 45.000 HUF</li>
                <li> 20 retouched photo: 50.000 HUF</li>
                <li> Any extra photo: 2.500 HUF/image</li>
                <li> Makeup Artist: 15.0000 HUF</li>
              </ul>
            </div>
          }
        />
        <PriceCard
          imgSrc="/moments_gallery/gallery_img_3.png"
          cardTitle="Studio Pregnancy Photo Session"
          cardBody={
            <div className={styles.cardList}>
              <ul>
                <li> 10 retouched photo: 55.000 HUF</li>
                <li> 15 retouched photo: 60.000 HUF</li>
                <li> 20 retouched photo: 65.000 HUF</li>
                <li> Any extra photo: 2.500 HUF/image</li>
                <li> Makeup Artist: 15.0000 HUF</li>
              </ul>
              <p> The prices above include the costs of renting a studio</p>
            </div>
          }
        />
      </CardDeck>
    </Layout>
  );
}
