// Fonction qui représente l'évolution du personnel, c'est-à-dire f(t, P)
function tauxEvolution(t, P, recrutement, depart) {
  return recrutement(t) - depart(t);
}

function euler(t0, P0, a, b, n, recrutement, depart) {
  let h = (b - a) / n;
  let t = t0;
  let w = P0;
  const resultats = [];

  for (let i = 0; i < n; i++) {
      resultats.push({ t, w });
      w = w + h * tauxEvolution(t, w, recrutement, depart);
      t = t + h;
  }

  return resultats;
}

const recrutement = t => 5;  // 5 personnes recrutées par unité de temps
const depart = t => 3;       // 3 personnes partent par unité de temps

const t0 = 0;
const P0 = 0;      // Nombre initial de personnels
const n = 5;       // Nombre d'itérations
const a = 0;
const b = 1;

const resultats = euler(t0, P0, a, b, n, recrutement, depart);

// Afficher les résultats
console.log("Temps", "Personnel");
resultats.forEach(({ t, w }) => {
  console.log(t.toFixed(2), w.toFixed(2));
});