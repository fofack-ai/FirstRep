try {
  const carrousel = document.querySelector('.carrousel');

  if (carrousel) {
    const slides = carrousel.querySelectorAll('.slide');
    const btnPrecedent = carrousel.querySelector('.precedent');
    const btnSuivant = carrousel.querySelector('.suivant');
    const conteneurPoints = carrousel.querySelector('.points');
    const DELAI = 5000;

    let index = 0;
    let minuteur = null;
    const points = [];

    // Création d'un point par diapositive
    slides.forEach((slide, i) => {
      const point = document.createElement('button');
      point.type = 'button';
      point.className = 'point';
      point.setAttribute('aria-label', 'Aller à la diapositive ' + (i + 1));
      point.addEventListener('click', () => {
        afficher(i);
        relancer();
      });
      conteneurPoints.appendChild(point);
      points.push(point);
    });

    // Affiche la diapositive i (le modulo permet de boucler)
    function afficher(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach((slide, n) => slide.classList.toggle('actif', n === index));
      points.forEach((point, n) => {
        point.classList.toggle('actif', n === index);
        point.setAttribute('aria-current', n === index ? 'true' : 'false');
      });
    }

    function demarrer() {
      // Pas de défilement automatique si l'utilisateur préfère moins d'animations
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      minuteur = setInterval(() => afficher(index + 1), DELAI);
    }

    function arreter() {
      clearInterval(minuteur);
    }

    function relancer() {
      arreter();
      demarrer();
    }

    btnPrecedent.addEventListener('click', () => {
      afficher(index - 1);
      relancer();
    });

    btnSuivant.addEventListener('click', () => {
      afficher(index + 1);
      relancer();
    });

    // Pause quand la souris est sur le carrousel
    carrousel.addEventListener('mouseenter', arreter);
    carrousel.addEventListener('mouseleave', relancer);

    afficher(0);
    demarrer();
  }
} catch (erreur) {
  console.error('Erreur dans carrousel.js :', erreur);
}