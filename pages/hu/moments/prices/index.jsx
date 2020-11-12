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
          cardTitle="Családi fotózás kültéren"
          cardBody={
            <div className={styles.cardList}>
              <ul>
                <li> 15 retusált kép: 40.000 Ft</li>
                <li> 20 retusált kép: 45.000 Ft</li>
                <li> 25 retusált kép: 50.000 Ft</li>
                <li> Extra képek: 2.500 Ft/kép</li>
              </ul>
            </div>
          }
        />
        <PriceCard
          imgSrc="/moments_gallery/gallery_img_2.png"
          cardTitle="Családi fotózás stúdióban"
          cardBody={
            <div className={styles.cardList}>
              <ul>
                <li> 15 retusált kép: 55.000 Ft</li>
                <li> 20 retusált kép: 60.000 Ft</li>
                <li> 25 retusált kép: 65.000 Ft</li>
                <li> Extra képek: 2.500 Ft/kép</li>
                <li> Professzionális sminkes: 15.0000 Ft</li>
              </ul>
              <p> A fenti árak a studió bérleti díját is tartalmazzák</p>
            </div>
          }
        />
      </CardDeck>
      <CardDeck className={styles.deckContainer}>
        <PriceCard
          imgSrc="/moments_gallery/gallery_img_6.png"
          cardTitle="Terhes fotózás kültéren"
          cardBody={
            <div className={styles.cardList}>
              <ul>
                <li> 10 retusált kép: 40.000 Ft</li>
                <li> 15 retusált kép: 45.000 Ft</li>
                <li> 20 retusált kép: 50.000 Ft</li>
                <li> Extra képek: 2.500 Ft/kép</li>
                <li> Professzionális sminkes: 15.000 Ft</li>
              </ul>
            </div>
          }
        />
        <PriceCard
          imgSrc="/moments_gallery/gallery_img_3.png"
          cardTitle="Terhes fotózás stúdióban"
          cardBody={
            <div className={styles.cardList}>
              <ul>
                <li> 10 retusált kép: 55.000 Ft</li>
                <li> 15 retusált kép: 60.000 Ft</li>
                <li> 20 retusált kép: 65.000 Ft</li>
                <li> Extra képek: 2.500 Ft/kép</li>
                <li> Professzionális sminkes: 15.000 Ft</li>
              </ul>
              <p> TA fenti árak a studió bérleti díját is tartalmazzák</p>
            </div>
          }
        />
      </CardDeck>
    </Layout>
  );
}
