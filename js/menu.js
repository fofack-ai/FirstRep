try {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('#menu-principal');

  if (burger && menu) {
    burger.addEventListener('click', () => {
      const ouvert = menu.classList.toggle('ouvert');
      burger.setAttribute('aria-expanded', ouvert);
      burger.setAttribute('aria-label', ouvert ? 'Fermer le menu' : 'Ouvrir le menu');
    });
  }
} catch (erreur) {
  console.error('Erreur dans menu.js :', erreur);
}