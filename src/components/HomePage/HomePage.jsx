import './HomePage.scss';

const HomePage = () => (
  <div className="home-page">
    <section className="about-section">
      <h2>À Propos</h2>
      <p>
        PaleoData est votre source ultime d`&apos;`informations sur la paléontologie, offrant des données sur les
        créatures étonnantes du Paléozoïque jusqu`&apos;`à nos jours.
      </p>
      <br />
      <p>
        <i>
          Nous nous engageons résolument à observer rigoureusement les dispositions du RGPD en matière de protection des
          données, et nous nous assurons ainsi de n'utiliser votre adresse électronique que dans le cadre des échanges
          liés au sujet principal du site.
        </i>
      </p>
    </section>
    <section className="contact-section">
      <h2>Une erreur ?</h2>
      <p>
        Une erreur géologique ou paléontologique ? <br />
        Contactez-nous par mail !
        <br />
        Précisez où vous avez trouvé l'erreur que vous avez découverte !
      </p>
      <a href="mailto:paleodata@outlook.com?subject=Erreur%20géologique%20et/ou%20paléontologique&body=Bonjour%2C%0A%0ASur votre site 'PaleoData', j'ai remarqué une erreur dans les informations géologiques ou paléontologiques suivantes%3A%0A%0A[Veuillez fournir les détails de l'erreur ici].%0A%0AVoici mes sources appuyant mes dires%3A%0A%0A[Veuillez fournir les sources ici].%0A%0AJe vous remercie beaucoup pour votre attention et vous adresse mes plus sincères salutations.%0A[Votre nom]%0A%0A">
        Envoyer un mail
      </a>
    </section>
    <section className="contact-section">
      <h2>Il en manque un...</h2>
      <p>
        Il manque un animal à la liste ? <br />
        Faites-le nous savoir !
        <br />
        Précisez quel animal n'a pas encore été découvert dans notre base de données !
      </p>
      <a href="mailto:paleodata@outlook.com?subject=Animal%20manquant&body=Bonjour%2C%0A%0ASur votre site 'PaleoData', j'ai remarqué qu'un (ou plusieurs) animaux ne figure(nt) pas. Il s'agit de %3A%0A%0A[Veuillez fournir le nom de l'animal (des animaux)].%0A%0AVoici des renseignements sur ce(s) trésor(s) du passé%3A%0A%0A[Veuillez fournir le maximum d'informations ici, en précisant le(s) nom(s), les taxons, le régime alimentaire, l'habitat, les informations géologiques (ère, période, époque, étage, apparition, extinction), la taille (hauteur et longueur), poids, les lieux et dates de découverte, et surtout, une description précise et complète]. %0A%0AJe vous remercie beaucoup pour votre attention et vous adresse mes plus sincères salutations.%0A[Votre nom]%0A%0A">
        Proposer un animal
      </a>
    </section>
    <section className="contact-section">
      <h2>Un bug ?</h2>
      <p>
        Vous avez identifié une fonctionnalité qui ne semble pas ou plus fonctionner correctement ? <br />
        Faites-le nous savoir !
        <br />
        Précisez où se trouve le bug et comment le reproduire !
      </p>
      <a href="mailto:paleodata@outlook.com?subject=Erreur%20de%20fonctionnalité&body=Bonjour%2C%0A%0ASur votre site 'PaleoData', j'ai remarqué un bug. En faisant %3A%0A%0A[Veuillez fournir les actions effectuées]%2C je ne parviens pas à [Effectuer cette action].%0A%0AJe vous remercie beaucoup pour votre attention et vous adresse mes plus sincères salutations.%0A[Votre nom]%0A%0A">
        Signaler un bug
      </a>
    </section>
    <section className="contact-section">
      <h2>Une fonctionnalité supplémentaire ?</h2>
      <p>
        Vous souhaitez voir une fonctionnalité apparaitre sur le site ? <br />
        Qu'à cela ne tienne !
        <br />
        Précisez ce qui simplifierait vos recherches !
      </p>
      <a href="mailto:paleodata@outlook.com?subject=Fonctionnalité%20de%20supplémentaire&body=Bonjour%2C%0A%0ASur votre site 'PaleoData', je souhaiterais beaucoup pouvoir%3A%0A%0A[Expliquez ce que vous souhaitez faire].%3A%0A%0ACela me permettrait de [Définissez l'objectif de la fonctionnalité demandée].%0A%0AJe vous remercie beaucoup pour votre attention et vous adresse mes plus sincères salutations.%0A[Votre nom]%0A%0A">
        Proposez une fonctionnalité
      </a>
    </section>
    <section className="contact-section">
      <h2>Vous souhaitez faire partie de l'aventure ?</h2>

      <p>
        Vous voulez nous accompagner dans la conception et l'amélioration de ce site ?
        <br />
        Faites-le nous savoir !
        <br />
        Que vous soyez développeurs, paléontologues amateurs ou professionnels, ou n'importe qui d'autre, envoyez un
        mail ! <br />
      </p>
      <a href="mailto:paleodata@outlook.com?subject=Rejoindre%20de%20l'aventure&body=Bonjour%2C%0A%0AJe découvre votre site 'PaleoData'.%0AJe suis intéressé(e) à rejoindre l'aventure.%0A%0AJe suis%3A [Renseignez votre métier ou votre rôle ici]%0A%0AMon expérience en lien avec la paléontologie ou le développement web est%3A [Indiquez votre expérience ici]%0A%0AJ'aimerais contribuer en%3A [Expliquez comment vous aimeriez contribuer]%0A%0AJe vous remercie beaucoup pour votre attention et vous adresse mes plus sincères salutations.%0A[Votre nom]%0A%0A">
        Rejoindre l'aventure
      </a>
      <span>
        ATTENTION: <br /> En voulant rejoindre notre équipe, vous devez être conscients que ce projet est{' '}
        <b>complètement bénévole</b>. Il s'agit là d'un loisir dans le simple but de rendre ce site attractif et utile
        tout en s'amusant et en partageant humblement notre savoir.
      </span>
      <span>
        Si vous êtes <b>développeurs</b> et que vous voulez faire partie de l'aventure, sachez que certaines
        fonctionnalités sont en cours de réflexion et n'attendent que vous. Nous prenons en compte toutes les
        suggestions et nous souhaitons intégrer le plus d'améliorations et correctifs possibles.
      </span>
    </section>
  </div>
);

export default HomePage;
