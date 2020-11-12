import { Col, Container, Row, Image } from "react-bootstrap";
import styles from "./short_about.module.scss";

export default function About() {
  return (
    <Container fluid className={styles.aboutContainer}>
      <Row>
        <Col className={styles.titleRow}>
          <h1>Rólam</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className={styles.aboutQuote}>
            "Azért fényképezünk, mert nem tudunk beletörődni, hogy minden
            elmúlik, hogy lehetetlen megismételni egy már átélt pillanatot.
            Egyhangú háborút vívunk saját halálunk fenyegető réme ellen, és az
            idő ellen, amely másfajta és kevésbé értékes lényekké: felnőttekké
            változtatja a gyereket. Azért fényképezünk, mert tudjuk magunkról,
            hogy felejtünk. Elfelejtjük a hetet, a napot, az órát; elfelejtjük
            azt a pillanatot, amikor a legboldogabbak voltunk." (Michelle
            Richmond)
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <h1 className={styles.aboutTitle}>
            Sziasztok, Márkus Viktória vagyok, családi, gyermek és női fotós.
          </h1>
        </Col>
        <Col xs={12} md={12} lg={5} align="center">
          <Image
            className={styles.profilePhoto}
            src="/viki_about.jpg"
            alt="Viki profile photo"
            rounded
            fluid
          />
        </Col>
        <Col>
          <div className={styles.aboutText}>
            <p>
              A családi és gyermekfotós vonal teljesen természetesen jött az
              életembe... megszülettek a lányaim és egyre jobb és szebb képeket
              szerettem volna róluk készíteni. Vettem is egy tükörreflexes
              gépet, aztán egyik tanfolyam és workshop jött a másik után...
              végül aztán megszereztem a fotós végzettséget is. Ekkorra már
              mindenkit lefotóztam a családból, a baráti körből, és az oviból
              is.... Ma már ott tartok, hogy fényképeket adok ajándékba is...
              hiszen épp a gyerekek változásán keresztül látszik a legjobban az
              idő múlása, megállítani egyedül a fotókkal lehetséges. Így adok
              örök emléket a nagymamáknak, a nagypapáknak és a családoknak, mert
              egyszer majd nagyon jó lesz elővenni ezeket a képeket.... A
              gyerekek és családok fotózása az egyik és első szívem csücske. De
              időközben új kihívásként került az életembe a nők szépségének
              megörökítése és ez lett a másik. Ki a munkájából, ki a családjától
              szakad el egy pár órára, de abban mindig megegyeznek, hogy
              hihetetlen élményt jelentett nekik az a néhány óra, ami kizárólag
              csak róluk szólt. Minden alkalommal libabőröztem, amikor meglátták
              magukat szép sminkben, amikor megmutattam a kijelzőn a képeket és
              nem hitték el, hogy ők ilyenek is tudnak lenni... Mindig
              elmondták, hogy a fotózás felért egy terápiával. És ez biztos,
              hogy így van, mert én is minden alkalommal igy éreztem... Gyertek,
              készítsünk együtt emlékeket!
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

// import { Container, Row, Col, Image } from "react-bootstrap";
// import styles from "./short_about.module.scss";

// export default function ShortAbout() {
//   return (
//     <section id="momentsShortAbout">
//       <div>
//         <Container fluid className={styles.aboutContainer}>
//           <Row>
//             <Col className={styles.titleRow}>
//               <h1>Rólam</h1>
//             </Col>
//           </Row>
//           <Row className={styles.aboutRow}>
//             <Col xs={12} md={5} l={4} align="center">
//               <Image
//                 className={styles.aboutImage}
//                 src="/viki_about.jpg"
//                 alt="Markus Viktoria profil foto"
//                 rounded
//                 fluid
//               />
//             </Col>
//             <Col xs={12} md={7} l={8}>
//               <p className={styles.aboutText}>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse vel pharetra dolor, at facilisis diam. Nam nec justo
//                 sodales, dignissim enim ut, tempus neque. Mauris congue mi eget
//                 sem tincidunt, sed imperdiet ante accumsan. Class aptent taciti
//                 sociosqu ad litora torquent per conubia nostra, per inceptos
//                 himenaeos. Fusce eu posuere ex. Proin ut massa sit amet enim
//                 egestas mollis malesuada eget leo. Phasellus at purus ac metus
//                 pharetra porta et ullamcorper justo. Nam cursus congue ultrices.
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </section>
//   );
// }
