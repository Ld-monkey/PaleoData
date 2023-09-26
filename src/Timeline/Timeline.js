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
                <span className="time">Étage</span>
              </th>

              <th>Âge (Ma)</th>
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
              <td>Méghalayen</td> <td>0,0042</td>
            </tr>
            <tr>
              <td>Northgrippien</td> <td>0,0082</td>
            </tr>
            <tr>
              <td>Greenlandien</td> <td>0,0117</td>
            </tr>
            <tr>
              <td rowSpan="4">Pléistocène</td>
              <td>Pléistocène supérieur</td> <td>0,126</td>
            </tr>
            <tr>
              <td>Pléistocène moyen</td> <td>0,781</td>
            </tr>
            <tr>
              <td>Calabrien</td> <td>1,80</td>
            </tr>
            <tr>
              <td>Gélasien</td> <td>2,58</td>
            </tr>
            <tr>
              <td rowSpan="8">Néogène</td>
              <td rowSpan="2">Pliocène</td>
              <td>Plaisancien</td> <td>3,600</td>
            </tr>
            <tr>
              <td>Zancléen</td> <td>5,333</td>
            </tr>
            <tr>
              <td rowSpan="6">Miocène</td>
              <td>Messinien</td> <td>7,246</td>
            </tr>
            <tr>
              <td>Tortonien</td> <td>11,63</td>
            </tr>
            <tr>
              <td>Serravallien</td> <td>13,82</td>
            </tr>
            <tr>
              <td>Langhien</td> <td>15,97</td>
            </tr>
            <tr>
              <td>Burdigalien</td> <td>20,44</td>
            </tr>
            <tr>
              <td>Aquitanien</td> <td>23,03</td>
            </tr>
            <tr>
              <td rowSpan="9">Paléogène</td>
              <td rowSpan="2">Oligocène</td>
              <td>Chattien</td> <td>28,1</td>
            </tr>
            <tr>
              <td>Rupélien</td> <td>33,9</td>
            </tr>
            <tr>
              <td rowSpan="4">Éocène</td>
              <td>Priabonien</td> <td>37,8</td>
            </tr>
            <tr>
              <td>Bartonien</td> <td>41,2</td>
            </tr>
            <tr>
              <td>Lutétien</td> <td>47,8</td>
            </tr>
            <tr>
              <td>Yprésien</td> <td>56,0</td>
            </tr>
            <tr>
              <td rowSpan="3">Paléocène</td>
              <td>Thanétien</td> <td>59,2</td>
            </tr>
            <tr>
              <td>Sélandien</td> <td>61,6</td>
            </tr>
            <tr>
              <td>Danien</td> <td>66,0</td>
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
              <td>Maastrichtien</td> <td>72,1± 0,2</td>
            </tr>
            <tr>
              <td>Campanien</td> <td>83,6± 0,2</td>
            </tr>
            <tr>
              <td>Santonien</td> <td>86,3± 0,5</td>
            </tr>
            <tr>
              <td>Coniacien</td> <td>89,8± 0,3</td>
            </tr>
            <tr>
              <td>Turonien</td> <td>93,9</td>
            </tr>
            <tr>
              <td>Cénomanien</td> <td>100,5</td>
            </tr>
            <tr>
              <td rowSpan="6">Inférieur</td>
              <td>Albien</td> <td>≃113,0</td>
            </tr>
            <tr>
              <td>Aptien</td> <td>≃125,0</td>
            </tr>
            <tr>
              <td>Barrémien</td> <td>≃129,4</td>
            </tr>
            <tr>
              <td>Hauterivien</td> <td>≃132,9</td>
            </tr>
            <tr>
              <td>Valanginien</td> <td>≃139,8</td>
            </tr>
            <tr>
              <td>Berriasien</td> <td>≃145,0</td>
            </tr>
            <tr>
              <td rowSpan="11">Jurassique</td>
              <td rowSpan="3">Supérieur</td>
              <td>Tithonien</td> <td>152,1± 0,9</td>
            </tr>
            <tr>
              <td>Kimméridgien</td> <td>157,3± 1,0</td>
            </tr>
            <tr>
              <td>Oxfordien</td> <td>163,5± 1,0</td>
            </tr>
            <tr>
              <td rowSpan="4">Moyen</td>
              <td>Callovien</td> <td>166,1± 1,2</td>
            </tr>
            <tr>
              <td>Bathonien</td> <td>168,3± 1,3</td>
            </tr>
            <tr>
              <td>Bajocien</td> <td>170,3± 1,4</td>
            </tr>
            <tr>
              <td>Aalénien</td> <td>174,1± 1,0</td>
            </tr>
            <tr>
              <td rowSpan="4">Inférieur</td>
              <td>Toarcien</td> <td>182,7± 0,7</td>
            </tr>
            <tr>
              <td>Pliensbachien</td> <td>190,8± 1,0</td>
            </tr>
            <tr>
              <td>Sinémurien</td> <td>199,3± 0,3</td>
            </tr>
            <tr>
              <td>Hettangien</td> <td>201,3± 0,2</td>
            </tr>
            <tr>
              <td rowSpan="7">Trias</td>
              <td rowSpan="3">Supérieur</td>
              <td>Rhétien</td> <td>≃208,5</td>
            </tr>
            <tr>
              <td>Norien</td> <td>≃227</td>
            </tr>
            <tr>
              <td>Carnien</td> <td>≃237</td>
            </tr>
            <tr>
              <td rowSpan="2">Moyen</td>
              <td>Ladinien</td>
              <td>≃242</td>
            </tr>
            <tr>
              <td>Anisien</td>
              <td>247,2</td>
            </tr>
            <tr>
              <td rowSpan="2">Inférieur</td>
              <td>Olénékien</td>
              <td>251,2</td>
            </tr>
            <tr>
              <td>Indusien</td>
              <td>252,17± 0,06</td>
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
              <td>Changhsingien</td>
              <td>254,14± 0,07</td>
            </tr>
            <tr>
              <td>Wuchiapingien</td>
              <td>259,8± 0,4</td>
            </tr>
            <tr>
              <td rowSpan="3">Guadalupien</td>
              <td>Capitanien</td>
              <td>265,1± 0,4</td>
            </tr>
            <tr>
              <td>Wordien</td>
              <td>268,8± 0,5</td>
            </tr>
            <tr>
              <td>Roadien</td>
              <td>272,95± 0,11</td>
            </tr>
            <tr>
              <td rowSpan="4">Cisuralien</td>
              <td>Kungurien</td>
              <td>283,5± 0,6</td>
            </tr>
            <tr>
              <td>Artinskien</td>
              <td>290,1± 0,26</td>
            </tr>
            <tr>
              <td>Sakmarien</td>
              <td>295,0± 0,18</td>
            </tr>
            <tr>
              <td>Assélien</td>
              <td>298,9± 0,15</td>
            </tr>
            <tr>
              <td rowSpan="7">Carbonifère</td>
              <td rowSpan="4">Pennsylvanien</td>
              <td>Gzhélien</td>
              <td>303,7± 0,1</td>
            </tr>
            <tr>
              <td>Kasimovien</td>
              <td>307,0± 0,1</td>
            </tr>
            <tr>
              <td>Moscovien</td>
              <td>315,2± 0,2</td>
            </tr>
            <tr>
              <td>Bachkirien</td>
              <td>323,2± 0,4</td>
            </tr>
            <tr>
              <td rowSpan="3">Mississippien</td>
              <td>Serpukhovien</td>
              <td>330,9± 0,2</td>
            </tr>
            <tr>
              <td>Viséen</td>
              <td>346,7± 0,4</td>
            </tr>
            <tr>
              <td>Tournaisien</td>
              <td>358,9± 0,4</td>
            </tr>
            <tr>
              <td rowSpan="7">Dévonien</td>
              <td rowSpan="2">Supérieur</td>
              <td>Famennien</td>
              <td>372,2± 1,6</td>
            </tr>
            <tr>
              <td>Frasnien</td>
              <td>382,7± 1,6</td>
            </tr>
            <tr>
              <td rowSpan="2">Moyen</td>
              <td>Givétien</td>
              <td>387,7± 0,8</td>
            </tr>
            <tr>
              <td>Eifélien</td>
              <td>393,3± 1,2</td>
            </tr>
            <tr>
              <td rowSpan="3">Inférieur</td>
              <td>Emsien</td>
              <td>407,6± 2,6</td>
            </tr>
            <tr>
              <td>Praguien</td>
              <td>410,8± 2,8</td>
            </tr>
            <tr>
              <td>Lochkovien</td>
              <td>419,2± 3,2</td>
            </tr>
            <tr>
              <td rowSpan="8">Silurien</td>
              <td>Pridoli</td>
              <td>Pridolien</td>
              <td>423,0± 2,3</td>
            </tr>
            <tr>
              <td rowSpan="2">Ludlow</td>
              <td>Ludfordien</td>
              <td>425,6± 0,9</td>
            </tr>
            <tr>
              <td>Gorstien</td>
              <td>427,4± 0,5</td>
            </tr>
            <tr>
              <td rowSpan="2">Wenlock</td>
              <td>Homérien</td>
              <td>430,5± 0,7</td>
            </tr>
            <tr>
              <td>Sheinwoodien</td>
              <td>433,4± 0,8</td>
            </tr>
            <tr>
              <td rowSpan="3">Llandovery</td>
              <td>Télychien</td>
              <td>438,5± 1,1</td>
            </tr>
            <tr>
              <td>Aéronien</td>
              <td>440,8± 1,2</td>
            </tr>
            <tr>
              <td>Rhuddanien</td>
              <td>443,8± 1,5</td>
            </tr>
            <tr>
              <td rowSpan="7">Ordovicien</td>
              <td rowSpan="3">Supérieur</td>
              <td>Hirnantien</td>
              <td>445,2± 1,4</td>
            </tr>

            <tr>
              <td>Katien</td>
              <td>453,0± 0,7</td>
            </tr>
            <tr>
              <td>Sandbien</td>
              <td>458,4± 0,9</td>
            </tr>
            <tr>
              <td rowSpan="2">Moyen</td>
              <td>Darriwilien</td>
              <td>467,3± 1,1</td>
            </tr>
            <tr>
              <td>Dapingien</td>
              <td>470,0± 1,4</td>
            </tr>
            <tr>
              <td rowSpan="2">Inférieur</td>
              <td>Floien</td>
              <td>477,7± 1,4</td>
            </tr>
            <tr>
              <td>Trémadocien</td>
              <td>485,4± 1,9</td>
            </tr>
            <tr>
              <td rowSpan="10">Cambrien</td>
              <td rowSpan="3">Furongien</td>
              <td>Étage 10</td>
              <td>≃489,5</td>
            </tr>
            <tr>
              <td>Jiangshanien</td>

              <td>≃494</td>
            </tr>
            <tr>
              <td>Paibien</td>
              <td>≃497</td>
            </tr>
            <tr>
              <td rowSpan="3">Miaolingien</td>
              <td>Guzhangien</td>
              <td>≃500,5</td>
            </tr>
            <tr>
              <td>Drumien</td>
              <td>≃504,5</td>
            </tr>
            <tr>
              <td>Wuliuen</td>
              <td>≃509</td>
            </tr>
            <tr>
              <td rowSpan="2">Série 2</td>
              <td>Étage 4</td>
              <td>≃514</td>
            </tr>
            <tr>
              <td>Étage 3</td>
              <td>≃521</td>
            </tr>
            <tr>
              <td rowSpan="2">Terreneuvien</td>
              <td>Étage 2</td>
              <td>≃529</td>
            </tr>
            <tr>
              <td>Fortunien</td>
              <td>541,0± 1,0</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Timeline;
