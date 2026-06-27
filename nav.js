/* nav.js — injecte le header CaCore sur toutes les pages
   Usage : <script src="../../nav.js"></script> (adapter le chemin selon la profondeur) */

(function () {
  // Détecte la profondeur pour construire les bons chemins
  const path = window.location.pathname;
  const depth = (path.match(/\//g) || []).length - 1;
  const root = depth === 1 ? './' : depth === 2 ? '../' : '../../';

  const nav = `
  <header class="site-header">
    <div class="container">
      <a href="${root}index.html" class="site-logo">⚡ <span>Ca</span>Core</a>
      <nav class="site-nav" aria-label="Navigation principale">
        <div class="nav-dropdown">
          <a href="${root}calculer/index.html">🧮 Calculer</a>
          <div class="dropdown-menu">
            <a href="${root}calculer/electronique.html">⚡ Électronique</a>
            <a href="${root}calculer/physique.html">⚙️ Physique</a>
            <a href="${root}calculer/mathematiques.html">📐 Mathématiques</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <a href="${root}comprendre/index.html">📚 Comprendre</a>
          <div class="dropdown-menu">
            <a href="${root}comprendre/college.html">Collège</a>
            <a href="${root}comprendre/lycee.html">Lycée</a>
            <a href="${root}comprendre/superieur.html">Études supérieures</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <a href="${root}sentrainer/index.html">📝 S'entraîner</a>
          <div class="dropdown-menu">
            <a href="${root}sentrainer/college.html">Collège</a>
            <a href="${root}sentrainer/lycee.html">Lycée</a>
            <a href="${root}sentrainer/superieur.html">Études supérieures</a>
          </div>
        </div>
        <a href="${root}apropos.html">À propos</a>
      </nav>
    </div>
  </header>`;

  const footer = `
  <footer class="site-footer">
    <div class="container">
      CaCore · Calculer. Comprendre. Réussir. · Calculs effectués localement dans ton navigateur
    </div>
  </footer>`;

  document.addEventListener('DOMContentLoaded', function () {
    // Header
    const headerPlaceholder = document.getElementById('site-header');
    if (headerPlaceholder) headerPlaceholder.outerHTML = nav;

    // Footer
    const footerPlaceholder = document.getElementById('site-footer');
    if (footerPlaceholder) footerPlaceholder.outerHTML = footer;
  });
})();
