import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink to="/" activeclassname="active">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/animaux" activeclassname="active">
            Animaux
          </NavLink>
        </li>
        {/* <li activeclassname="active">
          <NavLink to="/eres">Eres</NavLink>
          <ul className="subnav">
            <li>
              <NavLink to="/eres/paleozoique">Paléozoïque</NavLink>
            </li>
            <ul className="subnav">
              <li>
                <NavLink to="/eres/paleozoique/cambrien">Cambrien</NavLink>
              </li>
              <ul className="subnav">
                <li>
                  <NavLink to="/eres/paleozoique/cambrien/terreneuvien">
                    Terreneuvien
                  </NavLink>
                </li>
                <ul className="subnav">
                  <li>
                    <NavLink to="/eres/paleozoique/cambrien/terreneuvien/fortunien">
                      Fortunien
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/eres/paleozoique/cambrien/terreneuvien/etage2">
                      Etage 2
                    </NavLink>
                  </li>
                </ul>
                <li>
                  <NavLink to="/eres/paleozoique/cambrien/serie2">
                    Série 2
                  </NavLink>
                </li>
                <ul className="subnav">
                  <li>
                    <NavLink to="/eres/paleozoique/cambrien/serie2/etage3">
                      Etage 3
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/eres/paleozoique/cambrien/serie2/etage4">
                      Etage 4
                    </NavLink>
                  </li>
                </ul>
                <li>
                  <NavLink to="/eres/paleozoique/cambrien/miaolingien">
                    Miaolingien
                  </NavLink>
                  <ul className="subnav">
                    <li>
                      <NavLink to="/eres/paleozoique/cambrien/miaolingien/wuliuen">
                        Wuliuen
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/eres/paleozoique/cambrien/miaolingien/drumien">
                        Drumien
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/eres/paleozoique/cambrien/miaolingien/guzhangien">
                        Guzhangien
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/eres/paleozoique/cambrien/furongien">
                    Furongien
                  </NavLink>
                </li>
                <ul className="subnav">
                  <li>
                    <NavLink to="/eres/paleozoique/cambrien/furongien/paibien">
                      Paibien
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/eres/paleozoique/cambrien/furongien/jiangshanien">
                      Jiangshanien
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/eres/paleozoique/cambrien/furongien/etage10">
                      Etage 10
                    </NavLink>
                  </li>
                </ul>
              </ul>
              <li>
                <NavLink to="/eres/paleozoique/ordovicien">Ordovicien</NavLink>
                <ul className="subnav">
                  <li>
                    <NavLink to="/eres/paleozoique/ordovicien/inferieur">
                      Inférieur
                    </NavLink>
                    <ul className="subnav">
                      <li>
                        <NavLink to="/eres/paleozoique/ordovicien/inferieur/tremadocien">
                          Trémadocien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/ordovicien/inferieur/floien">
                          Floien
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/eres/paleozoique/ordovicien/moyen">
                      Moyen
                    </NavLink>
                    <ul className="subnav">
                      <li>
                        <NavLink to="/eres/paleozoique/ordovicien/moyen/dapingien">
                          Dapingien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/ordovicien/moyen/darriwilien">
                          Darriwilien
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/eres/paleozoique/ordovicien/supérieur">
                      Supérieur
                    </NavLink>
                    <ul className="subnav">
                      <li>
                        <NavLink to="/eres/paleozoique/ordovicien/superieur/sandbien">
                          Sandbien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/ordovicien/superieur/katien">
                          Katien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/ordovicien/superieur/hirnantien">
                          Harriwilien
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/eres/paleozoique/silurien">Silurien</NavLink>
                <ul className="subnav">
                  <li>
                    <NavLink to="/eres/paleozoique/silurien/llandovery">
                      Llandovery
                    </NavLink>
                  </li>
                  <ul className="subnav">
                    <li>
                      <NavLink to="/eres/paleozoique/silurien/llandovery/rhuddanien">
                        Rhuddanien
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/eres/paleozoique/silurien/llandovery/aeronien">
                        Aéronien
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/eres/paleozoique/silurien/llandovery/telychien">
                        Télychien
                      </NavLink>
                    </li>
                  </ul>
                  <li>
                    <NavLink to="/eres/paleozoique/silurien/wenlock">
                      Wenlock
                    </NavLink>
                    <ul className="subnav">
                      <li>
                        <NavLink to="/eres/paleozoique/silurien/wenlock/sheinwoodien">
                          Sheinwoodien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/silurien/wenlock/homerien">
                          Homérien
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/eres/paleozoique/silurien/ludlow">
                      Ludlow
                    </NavLink>
                    <ul className="subnav">
                      <li>
                        <NavLink to="/eres/paleozoique/silurien/ludlow/gorstien">
                          Gorstien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/silurien/ludlow/ludfordien">
                          Ludfordien
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/eres/paleozoique/silurien/pridoli">
                      Pridoli
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/eres/paleozoique/devonien">Dévonien</NavLink>
              </li>
              <ul className="subnav">
                <li>
                  <NavLink to="/eres/paleozoique/devonien/inferieur">
                    Inférieur
                  </NavLink>
                </li>
                <ul className="subnav">
                  <li>
                    <NavLink to="/eres/paleozoique/devonien/inferieur/lochkovien">
                      Lochkovien
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/eres/paleozoique/devonien/inferieur/praguien">
                      Praguien
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/eres/paleozoique/devonien/inferieur/emsien">
                      Emsien
                    </NavLink>
                  </li>
                </ul>
                <li>
                  <NavLink to="/eres/paleozoique/devonien/moyen">Moyen</NavLink>
                  <ul className="subnav">
                    <li>
                      <NavLink to="/eres/paleozoique/devonien/moyen/Frasnien">
                        Eifélien
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/eres/paleozoique/devonien/moyen/givetien">
                        Givétien
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/eres/paleozoique/devonien/superieur">
                    Supérieur
                  </NavLink>
                  <ul className="subnav">
                    <li>
                      <NavLink to="/eres/paleozoique/devonien/superieur/frasnien">
                        Frasnien
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/eres/paleozoique/devonien/superieur/famennien">
                        Famennien
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
              <li>
                <NavLink to="/eres/paleozoique/carbonifere">
                  Carbonifère
                </NavLink>
                <ul className="subnav">
                  <li>
                    <NavLink to="/eres/paleozoique/carbonifere/mississippien">
                      Mississippien
                    </NavLink>
                    <ul className="subnav">
                      <li>
                        <NavLink to="/eres/paleozoique/carbonifere/mississippien/tournaisien">
                          Tournaisien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/carbonifere/mississippien/viseen">
                          Viséen
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/carbonifere/mississippien/serpukhovien">
                          Serpukhovien
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/eres/paleozoique/carbonifere/pennsylvanien">
                      Pennsylvanien
                    </NavLink>
                    <ul className="subnav">
                      <li>
                        <NavLink to="/eres/paleozoique/carbonifere/pennsylvanien/bachkirien">
                          Bachkirien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/carbonifere/pennsylvanien/moscovien">
                          Moscovien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/carbonifere/pennsylvanien/kasimovien">
                          Kasimovien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/carbonifere/pennsylvanien/gzhelien">
                          Gzhélien
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/eres/paleozoique/permien">Permien</NavLink>
                <ul className="subnav">
                  <li>
                    <NavLink to="/eres/paleozoique/permien/cisuralien">
                      Cisuralien
                    </NavLink>
                    <ul className="subnav">
                      <li>
                        <NavLink to="/eres/paleozoique/permien/cisuralien/asselien">
                          Assélien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/permien/cisuralien/sakmarien">
                          Sakmarien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/permien/cisuralien/artinskien">
                          Artinskien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/permien/cisuralien/kungurien">
                          Kungurien
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/eres/paleozoique/permien/guadalupien">
                      Guadalupien
                    </NavLink>
                    <ul className="subnav">
                      <li>
                        <NavLink to="/eres/paleozoique/permien/guadalupien/capitanien">
                          Capitanien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/permien/guadalupien/wordien">
                          Wordien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/permien/guadalupien/roadien">
                          Roadien
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/eres/paleozoique/permien/lopingien">
                      Lopingien
                    </NavLink>
                    <ul className="subnav">
                      <li>
                        <NavLink to="/eres/paleozoique/permien/lopingien/wuchiapingien">
                          Wuchiapingien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/permien/lopingien/changhsingien">
                          Changhsingien
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <li>
              <NavLink to="/eres/mesozoique">Mésozoïque</NavLink>
              <ul className="subnav">
                <li>
                  <NavLink to="/eres/mesozoique/trias">Trias</NavLink>
                  <ul className="subnav">
                    <li>
                      <NavLink to="/eres/paleozoique/trias/inferieur">
                        Inferieur
                      </NavLink>
                      <ul className="subnav">
                        <li>
                          <NavLink to="/eres/paleozoique/trias/inferieur/indusien">
                            Indusien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/trias/inferieur/olenekien">
                            Olénékien
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/eres/paleozoique/trias/moyen">
                        Moyen
                      </NavLink>
                      <ul className="subnav">
                        <li>
                          <NavLink to="/eres/paleozoique/trias/moyen/anisien">
                            Anisien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/trias/moyen/ladinien">
                            Ladinien
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/eres/paleozoique/trias/superieur">
                        Superieur
                      </NavLink>
                      <ul className="subnav">
                        <li>
                          <NavLink to="/eres/paleozoique/trias/superieur/carnien">
                            Carnien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/trias/superieur/norien">
                            Norien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/trias/superieur/rhetien">
                            Rhétien
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/eres/mesozoique/jurassique">Jurassique</NavLink>
                  <ul className="subnav">
                    <li>
                      <NavLink to="/eres/paleozoique/jurassique/inferieur">
                        Inférieur
                      </NavLink>
                      <ul className="subnav">
                        <li>
                          <NavLink to="/eres/paleozoique/jurassique/inferieur/hettangien">
                            Hettangien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/jurassique/inferieur/sinemurien">
                            Sinémurien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/jurassique/inferieur/pliensbachien">
                            Pliensbachien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/jurassique/inferieur/toarcien">
                            Toarcien
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/eres/paleozoique/jurassique/moyen">
                        Moyen
                      </NavLink>
                      <ul className="subnav">
                        <li>
                          <NavLink to="/eres/paleozoique/jurassique/moyen/aalenien">
                            Aalénien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/jurassique/moyen/bajocien">
                            Bajocien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/jurassique/moyen/bathonien">
                            Bathonien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/jurassique/moyen/callovien">
                            Callovien
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <NavLink to="/eres/paleozoique/jurassique/superieur">
                        Supérieur
                      </NavLink>
                      <ul className="subnav">
                        <li>
                          <NavLink to="/eres/paleozoique/jurassique/superieur/oxfordien">
                            Oxfordien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/jurassique/superieur/kimmeridgien">
                            Kimméridgien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/jurassique/superieur/tithonien">
                            Tithonien
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/eres/mesozoique/cretace">Crétacé</NavLink>
                  <ul className="subnav">
                    <li>
                      <NavLink to="/eres/paleozoique/cretace/inferieur/">
                        Inférieur
                      </NavLink>
                    </li>
                    <ul className="subnav">
                      <li>
                        <NavLink to="/eres/paleozoique/cretace/inferieur/berriasien">
                          Berriasien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/cretace/inferieur/valanginien">
                          Valanginien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/cretace/inferieur/hauterivien">
                          Hauterivien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/cretace/inferieur/barremien">
                          Barrémien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/cretace/inferieur/aptien">
                          Aptien
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/eres/paleozoique/cretace/inferieur/albien">
                          Albien
                        </NavLink>
                      </li>
                    </ul>
                    <li>
                      <NavLink to="/eres/paleozoique/cretace/superieur/">
                        Supérieur
                      </NavLink>
                      <ul className="subnav">
                        <li>
                          <NavLink to="/eres/paleozoique/cretace/superieur/Cenomanien">
                            Cénomanien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/cretace/superieur/turonien">
                            Turonien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/cretace/superieur/coniacien">
                            Coniacien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/cretace/superieur/santonien">
                            Santonien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/cretace/superieur/campanien">
                            Campanien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/cretace/superieur/maastrichtien">
                            Maastrichtien
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/eres/cenozoique">Cénozoïque</NavLink>
              <ul className="subnav">
                <li>
                  <NavLink to="/eres/cenozoique/paleogene">Paléogène</NavLink>
                  <ul className="subnav">
                    <li>
                      <NavLink to="/eres/paleozoique/paleogene/paleocene">
                        Paléocène
                      </NavLink>
                      <ul className="subnav">
                        <li>
                          <NavLink to="/eres/paleozoique/paleogene/paleocene/Danien">
                            Danien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/paleogene/paleocene/selandien">
                            Sélandien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/paleogene/paleocene/thanetien">
                            Thanétien
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/eres/paleozoique/paleogene/eocene">
                        Eocène
                      </NavLink>
                      <ul className="subnav">
                        <li>
                          <NavLink to="/eres/paleozoique/paleogene/eocene/ypresien">
                            Yprésien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/paleogene/eocene/lutetien">
                            Lutétien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/paleogene/eocene/bartonien">
                            Bartonien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/paleogene/eocene/priabonien">
                            Priabonien
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/eres/paleozoique/paleogene/oligocene">
                        Oligocène
                      </NavLink>
                      <ul className="subnav">
                        <li>
                          <NavLink to="/eres/paleozoique/paleogene/oligocene/rupelien">
                            Rupélien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/paleogene/oligocene/chattien">
                            Chattien
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/eres/cenozoique/neogene">Néogène</NavLink>
                  <ul className="subnav">
                    <li>
                      <NavLink to="/eres/paleozoique/neogene/miocene">
                        Miocène
                      </NavLink>
                      <ul className="subnav">
                        <li>
                          <NavLink to="/eres/paleozoique/neogene/miocene/aquitanien">
                            Aquitanien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/neogene/miocene/burdigalien">
                            Burdigalien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/neogene/miocene/canghien">
                            Langhien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/neogene/miocene/derravallien">
                            Serravallien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/neogene/miocene/eortonien">
                            Tortonien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/neogene/miocene/messinien">
                            Messinien
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/eres/paleozoique/neogene/pliocene">
                        Pliocène
                      </NavLink>
                      <ul className="subnav">
                        <li>
                          <NavLink to="/eres/paleozoique/neogene/pliocene/zancleen">
                            Zancléen
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/paleozoique/neogene/pliocene/plaisancien">
                            Plaisancien
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/eres/cenozoique/quaternaire">
                    Quaternaire
                  </NavLink>
                  <ul className="subnav">
                    <li>
                      <NavLink to="/eres/cenozoique/quaternaire/pleistocene">
                        Pléistocène
                      </NavLink>
                      <ul className="subnav">
                        <li>
                          <NavLink to="/eres/cenozoique/quaternaire/pleistocene/gelasien">
                            Gélasien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/cenozoique/quaternaire/pleistocene/calabrien">
                            Calabrien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/cenozoique/quaternaire/pleistocene/pleistocene_moyen">
                            Pléistocène moyen
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/cenozoique/quaternaire/pleistocene/pleistocene_supérieur">
                            Pléistocène supérieur
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/eres/cenozoique/quaternaire/holocene">
                        Holocène
                      </NavLink>
                      <ul className="subnav">
                        <li>
                          <NavLink to="/eres/cenozoique/quaternaire/holocene/greenlandien">
                            Greenlandien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/cenozoique/quaternaire/holocene/northgrippien">
                            Northgrippien
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/eres/cenozoique/quaternaire/holocene/meghalayen">
                            Méghalayen
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li> */}
        <li>
          <NavLink to="/timeline">Chronologie</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

{
  /* <NavLink to="/noms">Noms</NavLink>
nom des animaux à boucler par OA */
}
