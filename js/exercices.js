try {
  const boutons = document.querySelectorAll('.filtre');
  const cartes = document.querySelectorAll('.carte[data-muscle]');
  const compteur = document.querySelector('#compteur');

  function filtrer(muscle) {
    let affiches = 0;

    cartes.forEach((carte) => {
      const visible = muscle === 'tous' || carte.dataset.muscle === muscle;
      carte.hidden = !visible;
      if (visible) affiches++;
    });

    boutons.forEach((bouton) => {
      const actif = bouton.dataset.filtre === muscle;
      bouton.classList.toggle('actif', actif);
      bouton.setAttribute('aria-pressed', actif);
    });

    compteur.textContent = affiches + (affiches > 1 ? ' exercices affichés' : ' exercice affiché');
  }

  boutons.forEach((bouton) => {
    bouton.addEventListener('click', () => filtrer(bouton.dataset.filtre));
  });
} catch (erreur) {
  console.error('Erreur dans exercices.js :', erreur);
}