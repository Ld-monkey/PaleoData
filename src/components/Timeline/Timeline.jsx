import { useState } from 'react';
import ModalTimeline from './ModalTimeline/ModalTimeline';
import './Timeline.scss';

const Timeline = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (content) => {
    setSelectedItem(content);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <main>
      <section className="timeline">
        <table>
          <tbody>
            <tr className="sticky-header">
              <th>
                <span className="time">Ère</span>
              </th>
              <th>
                <span className="time">Période</span>
              </th>
              <th>
                <span className="time">Époque</span>
              </th>
              <th>
                <span className="time">Étage</span> <br />
                <span className="time">Âge (Ma)</span>
              </th>
            </tr>

            <tr>
              <td rowSpan="25">
                <span>
                  C<br />É<br />N<br />O<br />Z<br />O<br />Ï<br />Q<br />U
                  <br />E
                </span>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td rowSpan="8">
                Quaternaire <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="3">
                Holocène <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Méghalayen <br /> <p className="date">0,0042</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Northgrippien <br /> <p className="date">0,0082 </p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Greenlandien <br /> <p className="date">0,0117 </p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="4">
                Pléistocène <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Pléistocène supérieur <br /> <p className="date">0,126</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Pléistocène moyen <br /> <p className="date">0,781</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Calabrien <br /> <p className="date">1,80</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Gélasien <br /> <p className="date">2,58</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="8">
                Néogène <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td rowSpan="2">
                Pliocène <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Plaisancien <br /> <p className="date">3,600</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Zancléen <br /> <p className="date">5,333</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="6">
                Miocène <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Messinien <br /> <p className="date">7,246</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Tortonien <br /> <p className="date">11,63</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Serravallien <br /> <p className="date">13,82</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Langhien <br /> <p className="date">15,97</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Burdigalien <br /> <p className="date">20,44</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Aquitanien <br /> <p className="date">23,03</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="9">
                Paléogène <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td rowSpan="2">
                Oligocène <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Chattien <br /> <p className="date">28,1</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Rupélien <br /> <p className="date">33,9</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="4">
                Éocène <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Priabonien <br /> <p className="date">37,8</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Bartonien <br /> <p className="date">41,2</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Lutétien <br /> <p className="date">47,8</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Yprésien <br /> <p className="date">56,0</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="3">
                Paléocène <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Thanétien <br /> <p className="date">59,2</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Sélandien <br /> <p className="date">61,6</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Danien <br /> <p className="date">66,0</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="30">
                <p>
                  M<br />É<br />S<br />O<br />Z<br />O<br />Ï<br />Q<br />U
                  <br />E
                </p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td rowSpan="12">
                Crétacé <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td rowSpan="6">
                Supérieur <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Maastrichtien <br /> <p className="date">72,1± 0,2</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Campanien <br /> <p className="date">83,6± 0,2</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Santonien <br /> <p className="date">86,3± 0,5</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Coniacien <br /> <p className="date">89,8± 0,3</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Turonien <br /> <p className="date">93,9</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Cénomanien <br /> <p className="date">100,5</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="6">
                Inférieur <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Albien <br /> <p className="date">≃113,0</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Aptien <br /> <p className="date">≃125,0</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Barrémien <br /> <p className="date">≃129,4</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Hauterivien <br /> <p className="date">≃132,9</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Valanginien <br /> <p className="date">≃139,8</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Berriasien <br /> <p className="date">≃145,0</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="11">
                Jurassique <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td rowSpan="3">
                Supérieur <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Tithonien <br /> <p className="date">152,1± 0,9</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Kimméridgien <br /> <p className="date">157,3± 1,0</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Oxfordien <br /> <p className="date">163,5± 1,0</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="4">
                Moyen <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Callovien <br /> <p className="date">166,1± 1,2</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Bathonien <br /> <p className="date">168,3± 1,3</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Bajocien <br /> <p className="date">170,3± 1,4</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Aalénien <br /> <p className="date">174,1± 1,0</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="4">
                Inférieur <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Toarcien <br /> <p className="date">182,7± 0,7</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Pliensbachien <br /> <p className="date">190,8± 1,0</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Sinémurien <br /> <p className="date">199,3± 0,3</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Hettangien <br /> <p className="date">201,3± 0,2</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="7">
                Trias <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td rowSpan="3">
                Supérieur <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Rhétien <br /> <p className="date">≃208,5</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Norien <br /> <p className="date">≃227</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Carnien <br /> <p className="date">≃237</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">
                Moyen <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Ladinien <br /> <p className="date">≃242</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Anisien <br /> <p className="date">247,2</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">
                Inférieur <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Olénékien <br /> <p className="date">251,2</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Indusien <br /> <p className="date">252,17± 0,06</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="48">
                <p>
                  P<br />A<br />L<br />É<br />O<br />Z<br />O<br />Ï<br />Q
                  <br />U
                  <br />E
                </p>
                <br />
                <button
                  onClick={() =>
                    openModal(
                      "Composé de 6 périodes, le Paléozoïque (ayant pour étymologie 'Vie ancienne') est une ère géologique qui s'étend de −541 à −252,2 Ma, soit sur 288,8 Ma. Cette ère a longtemps été appelée 'Ère Primaire', ou 'Ère des Poissons' du fait d'une grande période de temps où la vie ne développait que dans l'eau. <br /><br /> Le Paléozoïque démarre peu après la fragmentation du supercontinent Rodinia en au moins huit masses continentales. Au cours de cette ère ces continents se rassemblent à nouveau pour former la Pangée. Au début de cette ère, les formes de vie se limitent à des bactéries, des algues, des éponges et une variété de formes encore mal connues apparues avant cette ère (durant l'Édicarien). <br /><br /> La diversité et le nombre d'organismes explosent durant le Cambrien. On pense que les premiers organismes terrestres apparaissent durant le Paléozoïque mais ce phénomène reste mineur avant le Silurien et le Dévonien. Bien que des vertébrés primitifs soient présents dès le début de cette ère, les invertébrés restent dominants jusqu'au milieu du Paléozoïque. La population de poissons explose durant le Dévonien. <br /><br /> Pendant la seconde moitié de cette ère et particulièrement au Carbonifère, de grandes forêts de plantes primitives forment ce qui deviendra des couches de charbon. À la fin du Paléozoïque, les premiers reptiles sophistiqués et les premières plantes modernes (conifères) se sont développés.",
                    )
                  }
                >
                  +
                </button>
              </td>
              <td rowSpan="9">
                Permien <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td rowSpan="2">
                Lopingien <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Changhsingien <br /> <p className="date">254,14± 0,07</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Wuchiapingien <br /> <p className="date">259,8± 0,4</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="3">
                Guadalupien <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Capitanien <br /> <p className="date">265,1± 0,4</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Wordien <br /> <p className="date">268,8± 0,5</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Roadien <br /> <p className="date">272,95± 0,11</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="4">
                Cisuralien <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Kungurien <br /> <p className="date">283,5± 0,6</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Artinskien <br /> <p className="date">290,1± 0,26</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Sakmarien <br /> <p className="date">295,0± 0,18</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Assélien <br /> <p className="date">298,9± 0,15</p> <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="7">
                Carbonifère
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td rowSpan="4">
                Pennsylvanien
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Gzhélien <br /> <p className="date">303,7± 0,1</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Kasimovien <br /> <p className="date">307,0± 0,1</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Moscovien <br /> <p className="date">315,2± 0,2</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Bachkirien <br /> <p className="date">323,2± 0,4</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="3">
                Mississippien
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Serpukhovien <br /> <p className="date">330,9± 0,2</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Viséen <br /> <p className="date">346,7± 0,4</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Tournaisien <br /> <p className="date">358,9± 0,4</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="7">
                Dévonien
                <br />
                <button
                  onClick={() =>
                    openModal(
                      "De −419 à −359 Ma, soir 60 Ma, le Dévonien a été nommé d'après le comté de Devon, en Angleterre. <br /><br /> Le taux de dioxigène dans l'air est de 15%, tandis que le taux de dioxyde de carbone est d'environ 2200 ppm, soit 8 fois plus qu'avant la Révolution Industrielle du XIXè siècle. La température moyenne est de 20°C, mais il y eut des périodes où la température grimpait jusqu'à 30°C. Le niveau des mers est plus élevé qu'aujourd'hui. <br /><br /> La vie y est majoritairement marine et ce sont les requins qui sont les principaux prédateurs. D'est durant le Dévonien que les premiers amphibiens sont apparus. <br /><br/> Le Dévonien est aussi connu sous le nom d’'âge à effet de serre' ou encore d’'âge des fougères', la végétation (boisée comprise) prend de plus en plus de place sur la terre ferme. <br /> <br />Au Dévonien supérieur (entre le Frasnien et le Famennien) a lieu la deuxième extinction massive, qui affecte jusqu’à 70 % des espèces vivantes. La cause de cette extinction reste inconnue.",
                    )
                  }
                >
                  +
                </button>
              </td>
              <td rowSpan="2">
                Supérieur
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Famennien <br /> <p className="date">372,2± 1,6</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Frasnien <br /> <p className="date">382,7± 1,6</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">
                Moyen
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Givétien <br /> <p className="date">387,7± 0,8</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Eifélien <br /> <p className="date">393,3± 1,2</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="3">
                Inférieur
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Emsien <br /> <p className="date">407,6± 2,6</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Praguien <br /> <p className="date">410,8± 2,8</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Lochkovien <br /> <p className="date">419,2± 3,2</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="8">
                Silurien
                <br />
                <button
                  type="button"
                  onClick={() =>
                    openModal(
                      "Durant à peine 24.2 Ma, de -443.4 à -419.2 Ma, le Silurien a été nommé en 1835 d'après une tribu celtique : les Silures. <br /><br /> Le taux de dioxigène dans l'air est de 14%, tandis que le taux de dioxyde de carbone est d'environ 4500 ppm, soit 16 fois plus qu'avant la Révolution Industrielle du XIXè siècle. La température moyenne est de 17°C. Le niveau des mers est 180 mètres plus élevé qu'aujourd'hui. <br /><br /> La vie y est essentiellement marine, mais les premières plantes multicellulaires commencent à appraitre. Cela reste des organismes simples, se reproduisant à l'aide de spores. Les premiers arthropodes commencent à coloniser la Terre. <br /><br /> Le supercontinent Gondwana se forme dans l'hémisphère Sud du globe.",
                    )
                  }
                >
                  +
                </button>
              </td>
              <td>
                Pridoli
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Pridolien <br /> <p className="date">423,0± 2,3</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">
                Ludlow
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Ludfordien <br /> <p className="date">425,6± 0,9</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Gorstien <br /> <p className="date">427,4± 0,5</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">
                Wenlock
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Homérien <br /> <p className="date">430,5± 0,7</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Sheinwoodien <br /> <p className="date">433,4± 0,8</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="3">
                Llandovery
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Télychien <br /> <p className="date">438,5± 1,1</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Aéronien <br /> <p className="date">440,8± 1,2</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Rhuddanien <br /> <p className="date">443,8± 1,5</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="7">
                Ordovicien
                <br />
                <button
                  type="button"
                  onClick={() =>
                    openModal(
                      "S'étandant sur environ 42,0 ± 3,4 Ma, de - 485,4 ± 1,9 à - 443,4 ± 1,5, l'Ordovicien tient son nom des Ordovices, un peuple brittonique de l’actuel Pays de Galles. Il a fallu un moment aux scientifiques pour résoudre un problème de classification géologique entre le Cambrien, la période précédent l'Ordovicien, et le Silurien, période suivante. <br /><br /> Le taux de dioxigène dans l'air est de 13.5%, tandis que le taux de dioxyde de carbone est d'environ 4200 ppm, soit 15 fois plus qu'avant la Révolution Industrielle du XIXè siècle. La température moyenne est de 16°C, soit plus froide que durant le Cambrien. Cette baisse de température permet une explosion de la biodiversité marine. Les scientifiques estiment que le nombre de genres et de familles d'êtres vivants a triplé voire quadruplé. <br /><br />La fin de l'Ordovicien est marquée par la première des cinq grandes extinctions massives de l'Histoire des temps géologiques, où près de 60 % des espèces marines ont disparu et peut-être 85 % du total des espèces (végétales et animales). Cette extinction de masse s'appelle 'l'extinction Ordovicien-Silurien.'",
                    )
                  }
                >
                  +
                </button>
              </td>
              <td rowSpan="3">
                Supérieur
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Hirnantien <br /> <p className="date">445,2± 1,4</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>

            <tr>
              <td>
                Katien <br /> <p className="date">453,0± 0,7</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Sandbien <br /> <p className="date">458,4± 0,9</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">
                Moyen
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Darriwilien <br /> <p className="date">467,3± 1,1</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Dapingien <br /> <p className="date">470,0± 1,4</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">
                Inférieur
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Floien <br /> <p className="date">477,7± 1,4</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Trémadocien <br /> <p className="date">485,4± 1,9</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="10">
                Cambrien
                <br />
                <button
                  type="button"
                  onClick={() =>
                    openModal(
                      "Nous retrouvons des strates géologiques cambriennes partout dans le monde. Le Cambrien, qui s'étend de −541 ± 1,0 à −485,4 ± 1,9 millions d'années, est la première, et la plus ancienne, des six périodes géologiques du Paléozoïque. <br /><br /> Le Cambrien a été introduit par Adam Sedgwick en 1835. Il dérive de Cambria, le nom latin du Pays de Galles, où de nombreux terrains de cette période sont visibles. <br /><br /> Durant cette période, la vie s'y développe uniquement dans l'eau, bien que la terre ferme existe déjà depuis des milions d'années. Comme les plantes n'existent pas encore, le taux de dioxigène dans l'air n'est que de 12.5%, tandis que le taux de dioxyde de carbone avoisine les 4500 ppm, soit 16 fois plus qu'avant la Révolution Industrielle du XIXè siècle. La température moyenne est de 21°C et le niveau des mers est compris entre 30 et 90 mètres de plus qu'aujourd'hui.",
                    )
                  }
                >
                  +
                </button>
              </td>
              <td rowSpan="3">
                Furongien
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Étage 10 <br /> <p className="date">≃489,5</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Jiangshanien <br /> <p className="date">≃494</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Paibien <br /> <p className="date">≃497</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="3">
                Miaolingien
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Guzhangien <br /> <p className="date">≃500,5</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Drumien <br /> <p className="date">≃504,5</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Wuliuen <br /> <p className="date">≃509</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">
                Série 2<br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Étage 4 <br /> <p className="date">≃514</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Étage 3 <br /> <p className="date">≃521</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">
                Terreneuvien
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
              <td>
                Étage 2 <br /> <p className="date">≃529</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Fortunien <br /> <p className="date">541,0± 1,0</p>
                <br />
                <button onClick={() => openModal('Infos à venir ;) ')} type="button">
                  +
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <ModalTimeline
        isOpen={!!selectedItem}
        closeModal={closeModal}
        content={<div dangerouslySetInnerHTML={{ __html: selectedItem }} />}
      />
    </main>
  );
};

export default Timeline;
