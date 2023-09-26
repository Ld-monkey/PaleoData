import React from "react";

import "./Timeline.scss";

const Timeline = () => {
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
              </td>
              <td rowSpan="8">Quaternaire</td>
            </tr>
            <tr>
              <td rowSpan="3">Holocène</td>
              <td>
                Méghalayen <br /> <p className="date">0,0042</p>
              </td>
            </tr>
            <tr>
              <td>
                Northgrippien <br /> <p className="date">0,0082</p>
              </td>
            </tr>
            <tr>
              <td>
                Greenlandien <br /> <p className="date">0,0117</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="4">Pléistocène</td>
              <td>
                Pléistocène supérieur <br /> <p className="date">0,126</p>
              </td>
            </tr>
            <tr>
              <td>
                Pléistocène moyen <br /> <p className="date">0,781</p>
              </td>
            </tr>
            <tr>
              <td>
                Calabrien <br /> <p className="date">1,80</p>
              </td>
            </tr>
            <tr>
              <td>
                Gélasien <br /> <p className="date">2,58</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="8">Néogène</td>
              <td rowSpan="2">Pliocène</td>
              <td>
                Plaisancien <br /> <p className="date">3,600</p>
              </td>
            </tr>
            <tr>
              <td>
                Zancléen <br /> <p className="date">5,333</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="6">Miocène</td>
              <td>
                Messinien <br /> <p className="date">7,246</p>
              </td>
            </tr>
            <tr>
              <td>
                Tortonien <br /> <p className="date">11,63</p>
              </td>
            </tr>
            <tr>
              <td>
                Serravallien <br /> <p className="date">13,82</p>
              </td>
            </tr>
            <tr>
              <td>
                Langhien <br /> <p className="date">15,97</p>
              </td>
            </tr>
            <tr>
              <td>
                Burdigalien <br /> <p className="date">20,44</p>
              </td>
            </tr>
            <tr>
              <td>
                Aquitanien <br /> <p className="date">23,03</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="9">Paléogène</td>
              <td rowSpan="2">Oligocène</td>
              <td>
                Chattien <br /> <p className="date">28,1</p>
              </td>
            </tr>
            <tr>
              <td>
                Rupélien <br /> <p className="date">33,9</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="4">Éocène</td>
              <td>
                Priabonien <br /> <p className="date">37,8</p>
              </td>
            </tr>
            <tr>
              <td>
                Bartonien <br /> <p className="date">41,2</p>
              </td>
            </tr>
            <tr>
              <td>
                Lutétien <br /> <p className="date">47,8</p>
              </td>
            </tr>
            <tr>
              <td>
                Yprésien <br /> <p className="date">56,0</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="3">Paléocène</td>
              <td>
                Thanétien <br /> <p className="date">59,2</p>
              </td>
            </tr>
            <tr>
              <td>
                Sélandien <br /> <p className="date">61,6</p>
              </td>
            </tr>
            <tr>
              <td>
                Danien <br /> <p className="date">66,0</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="30">
                <p>
                  M<br />É<br />S<br />O<br />Z<br />O<br />Ï<br />Q<br />U
                  <br />E
                </p>
              </td>
              <td rowSpan="12">Crétacé</td>
              <td rowSpan="6">Supérieur</td>
              <td>
                Maastrichtien <br /> <p className="date">72,1± 0,2</p>
              </td>
            </tr>
            <tr>
              <td>
                Campanien <br /> <p className="date">83,6± 0,2</p>
              </td>
            </tr>
            <tr>
              <td>
                Santonien <br /> <p className="date">86,3± 0,5</p>
              </td>
            </tr>
            <tr>
              <td>
                Coniacien <br /> <p className="date">89,8± 0,3</p>
              </td>
            </tr>
            <tr>
              <td>
                Turonien <br /> <p className="date">93,9</p>
              </td>
            </tr>
            <tr>
              <td>
                Cénomanien <br /> <p className="date">100,5</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="6">Inférieur</td>
              <td>
                Albien <br /> <p className="date">≃113,0</p>
              </td>
            </tr>
            <tr>
              <td>
                Aptien <br /> <p className="date">≃125,0</p>
              </td>
            </tr>
            <tr>
              <td>
                Barrémien <br /> <p className="date">≃129,4</p>
              </td>
            </tr>
            <tr>
              <td>
                Hauterivien <br /> <p className="date">≃132,9</p>
              </td>
            </tr>
            <tr>
              <td>
                Valanginien <br /> <p className="date">≃139,8</p>
              </td>
            </tr>
            <tr>
              <td>
                Berriasien <br /> <p className="date">≃145,0</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="11">Jurassique</td>
              <td rowSpan="3">Supérieur</td>
              <td>
                Tithonien <br /> <p className="date">152,1± 0,9</p>
              </td>
            </tr>
            <tr>
              <td>
                Kimméridgien <br /> <p className="date">157,3± 1,0</p>
              </td>
            </tr>
            <tr>
              <td>
                Oxfordien <br /> <p className="date">163,5± 1,0</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="4">Moyen</td>
              <td>
                Callovien <br /> <p className="date">166,1± 1,2</p>
              </td>
            </tr>
            <tr>
              <td>
                Bathonien <br /> <p className="date">168,3± 1,3</p>
              </td>
            </tr>
            <tr>
              <td>
                Bajocien <br /> <p className="date">170,3± 1,4</p>
              </td>
            </tr>
            <tr>
              <td>
                Aalénien <br /> <p className="date">174,1± 1,0</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="4">Inférieur</td>
              <td>
                Toarcien <br /> <p className="date">182,7± 0,7</p>
              </td>
            </tr>
            <tr>
              <td>
                Pliensbachien <br /> <p className="date">190,8± 1,0</p>
              </td>
            </tr>
            <tr>
              <td>
                Sinémurien <br /> <p className="date">199,3± 0,3</p>
              </td>
            </tr>
            <tr>
              <td>
                Hettangien <br /> <p className="date">201,3± 0,2</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="7">Trias</td>
              <td rowSpan="3">Supérieur</td>
              <td>
                Rhétien <br /> <p className="date">≃208,5</p>
              </td>
            </tr>
            <tr>
              <td>
                Norien <br /> <p className="date">≃227</p>
              </td>
            </tr>
            <tr>
              <td>
                Carnien <br /> <p className="date">≃237</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">Moyen</td>
              <td>
                Ladinien <br /> <p className="date">≃242</p>
              </td>
            </tr>
            <tr>
              <td>
                Anisien <br /> <p className="date">247,2</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">Inférieur</td>
              <td>
                Olénékien <br /> <p className="date">251,2</p>
              </td>
            </tr>
            <tr>
              <td>
                Indusien <br /> <p className="date">252,17± 0,06</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="48">
                <p>
                  P<br />A<br />L<br />É<br />O<br />Z<br />O<br />Ï<br />Q
                  <br />U
                  <br />E
                </p>
              </td>
              <td rowSpan="9">Permien</td>
              <td rowSpan="2">Lopingien</td>
              <td>
                Changhsingien <br /> <p className="date">254,14± 0,07</p>
              </td>
            </tr>
            <tr>
              <td>
                Wuchiapingien <br /> <p className="date">259,8± 0,4</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="3">Guadalupien</td>
              <td>
                Capitanien <br /> <p className="date">265,1± 0,4</p>
              </td>
            </tr>
            <tr>
              <td>
                Wordien <br /> <p className="date">268,8± 0,5</p>
              </td>
            </tr>
            <tr>
              <td>
                Roadien <br /> <p className="date">272,95± 0,11</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="4">Cisuralien</td>
              <td>
                Kungurien <br /> <p className="date">283,5± 0,6</p>
              </td>
            </tr>
            <tr>
              <td>
                Artinskien <br /> <p className="date">290,1± 0,26</p>
              </td>
            </tr>
            <tr>
              <td>
                Sakmarien <br /> <p className="date">295,0± 0,18</p>
              </td>
            </tr>
            <tr>
              <td>
                Assélien <br /> <p className="date">298,9± 0,15</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="7">Carbonifère</td>
              <td rowSpan="4">Pennsylvanien</td>
              <td>
                Gzhélien <br /> <p className="date">303,7± 0,1</p>
              </td>
            </tr>
            <tr>
              <td>
                Kasimovien <br /> <p className="date">307,0± 0,1</p>
              </td>
            </tr>
            <tr>
              <td>
                Moscovien <br /> <p className="date">315,2± 0,2</p>
              </td>
            </tr>
            <tr>
              <td>
                Bachkirien <br /> <p className="date">323,2± 0,4</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="3">Mississippien</td>
              <td>
                Serpukhovien <br /> <p className="date">330,9± 0,2</p>
              </td>
            </tr>
            <tr>
              <td>
                Viséen <br /> <p className="date">346,7± 0,4</p>
              </td>
            </tr>
            <tr>
              <td>
                Tournaisien <br /> <p className="date">358,9± 0,4</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="7">Dévonien</td>
              <td rowSpan="2">Supérieur</td>
              <td>
                Famennien <br /> <p className="date">372,2± 1,6</p>
              </td>
            </tr>
            <tr>
              <td>
                Frasnien <br /> <p className="date">382,7± 1,6</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">Moyen</td>
              <td>
                Givétien <br /> <p className="date">387,7± 0,8</p>
              </td>
            </tr>
            <tr>
              <td>
                Eifélien <br /> <p className="date">393,3± 1,2</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="3">Inférieur</td>
              <td>
                Emsien <br /> <p className="date">407,6± 2,6</p>
              </td>
            </tr>
            <tr>
              <td>
                Praguien <br /> <p className="date">410,8± 2,8</p>
              </td>
            </tr>
            <tr>
              <td>
                Lochkovien <br /> <p className="date">419,2± 3,2</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="8">Silurien</td>
              <td>Pridoli</td>
              <td>
                Pridolien <br /> <p className="date">423,0± 2,3</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">Ludlow</td>
              <td>
                Ludfordien <br /> <p className="date">425,6± 0,9</p>
              </td>
            </tr>
            <tr>
              <td>
                Gorstien <br /> <p className="date">427,4± 0,5</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">Wenlock</td>
              <td>
                Homérien <br /> <p className="date">430,5± 0,7</p>
              </td>
            </tr>
            <tr>
              <td>
                Sheinwoodien <br /> <p className="date">433,4± 0,8</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="3">Llandovery</td>
              <td>
                Télychien <br /> <p className="date">438,5± 1,1</p>
              </td>
            </tr>
            <tr>
              <td>
                Aéronien <br /> <p className="date">440,8± 1,2</p>
              </td>
            </tr>
            <tr>
              <td>
                Rhuddanien <br /> <p className="date">443,8± 1,5</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="7">Ordovicien</td>
              <td rowSpan="3">Supérieur</td>
              <td>
                Hirnantien <br /> <p className="date">445,2± 1,4</p>
              </td>
            </tr>

            <tr>
              <td>
                Katien <br /> <p className="date">453,0± 0,7</p>
              </td>
            </tr>
            <tr>
              <td>
                Sandbien <br /> <p className="date">458,4± 0,9</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">Moyen</td>
              <td>
                Darriwilien <br /> <p className="date">467,3± 1,1</p>
              </td>
            </tr>
            <tr>
              <td>
                Dapingien <br /> <p className="date">470,0± 1,4</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">Inférieur</td>
              <td>
                Floien <br /> <p className="date">477,7± 1,4</p>
              </td>
            </tr>
            <tr>
              <td>
                Trémadocien <br /> <p className="date">485,4± 1,9</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="10">Cambrien</td>
              <td rowSpan="3">Furongien</td>
              <td>
                Étage 10 <br /> <p className="date">≃489,5</p>
              </td>
            </tr>
            <tr>
              <td>
                Jiangshanien <br /> <p className="date">≃494</p>
              </td>
            </tr>
            <tr>
              <td>
                Paibien <br /> <p className="date">≃497</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="3">Miaolingien</td>
              <td>
                Guzhangien <br /> <p className="date">≃500,5</p>
              </td>
            </tr>
            <tr>
              <td>
                Drumien <br /> <p className="date">≃504,5</p>
              </td>
            </tr>
            <tr>
              <td>
                Wuliuen <br /> <p className="date">≃509</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">Série 2</td>
              <td>
                Étage 4 <br /> <p className="date">≃514</p>
              </td>
            </tr>
            <tr>
              <td>
                Étage 3 <br /> <p className="date">≃521</p>
              </td>
            </tr>
            <tr>
              <td rowSpan="2">Terreneuvien</td>
              <td>
                Étage 2 <br /> <p className="date">≃529</p>
              </td>
            </tr>
            <tr>
              <td>
                Fortunien <br /> <p className="date">541,0± 1,0</p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Timeline;
