# Portfolio — Miali Randriamanantena

Site portfolio personnel single-page, bilingue (FR/EN), construit avec **TanStack Start (React 19) + Tailwind v4 + Framer Motion**.

## Aperçu

- Section Hero avec portrait et accroche bilingue
- Composant signature **FilmStrip** (pellicule cinéma défilante) placé après le Hero et après les Projets
- Sections : À propos, Compétences, Projets, Distinctions, Expériences, Formation, Contact
- Bouton de bascule de langue (FR ⇄ EN) dans la navbar et le footer
- Navbar fixe (sticky) avec effet de fond au scroll
- Animations au scroll via Framer Motion + effets hover-zoom sur les images

## Structure des dossiers

```
src/
├── assets/                  # Images (portrait, projets, distinctions…)
├── components/
│   ├── Navbar.tsx           # Navigation fixe + toggle de langue
│   ├── FilmStrip.tsx        # Pellicule cinéma défilante (composant signature)
│   └── ui/                  # Composants shadcn (non utilisés ici par défaut)
├── lib/
│   └── i18n.tsx             # Contexte React pour la langue (FR/EN) + helper t(fr, en)
├── routes/
│   ├── __root.tsx           # Layout racine, balises <head>, polices Google
│   └── index.tsx            # Page unique avec toutes les sections
└── styles.css               # Design system : tokens couleur, polices, animations
```

## Technologies utilisées

- **TanStack Start v1** (React 19, file-based routing)
- **Tailwind CSS v4** (CSS-first via `@theme` dans `src/styles.css`)
- **Framer Motion** pour les animations au scroll
- **Google Fonts** : Fraunces (display) + DM Sans (corps)
- **TypeScript** strict

## Installation locale

```bash
bun install        # ou npm install / pnpm install
bun run dev        # lance le serveur de dev (Vite)
bun run build      # build de production
```

## Guide des modifications fréquentes

### Remplacer une image

Toutes les images vivent dans `src/assets/` et sont importées en haut de `src/routes/index.tsx` :

```ts
import portrait from "@/assets/portrait.jpg";
import projPaths from "@/assets/project-paths.jpg";
// ...
```

Pour remplacer une image, **dépose simplement un nouveau fichier au même nom et au même format** (ou ajoute un nouveau fichier puis change le chemin de l'import). Ratios recommandés :
- Portrait Hero : **4/5** (896×1152)
- Cartes Projets : **16/9** (1280×720)
- Cartes Distinctions : **4/3** (1024×768)
- Photo « À propos » : **4/3** (1280×896)

### Modifier un texte

Tous les textes bilingues sont écrits inline via le helper `t("texte FR", "texte EN")` :

```tsx
<h1>{t("Bonjour", "Hello")}</h1>
```

Ouvre `src/routes/index.tsx`, cherche la chaîne FR, modifie les deux versions.

### Ajouter un projet

Dans `src/routes/index.tsx`, repère le tableau `projects` dans la fonction `Projects()` et ajoute un objet :

```ts
{
  img: nouveauProjet,            // import depuis src/assets/
  title: "Titre du projet",
  year: "2026",
  url: "https://…",             // optionnel
  descFr: "Description en français.",
  descEn: "English description.",
  tags: ["Tag1", "Tag2"],
}
```

Pense à ajouter l'import en haut du fichier : `import nouveauProjet from "@/assets/mon-image.jpg";`

### Changer une couleur

La palette est définie dans `src/styles.css` sous `:root` :

```css
:root {
  --terracotta: oklch(0.55 0.16 40);   /* #C1440E */
  --gold:       oklch(0.78 0.15 70);    /* #F5A623 */
  --forest:     oklch(0.32 0.06 160);   /* #1B4332 */
  --cream:      oklch(0.97 0.012 80);   /* #FAF7F2 */
  --ink:        oklch(0.22 0.005 60);   /* #1A1A1A */
}
```

Modifie une valeur `oklch()` et toutes les classes Tailwind correspondantes (`bg-terracotta`, `text-gold`…) sont mises à jour partout dans le site.

### Modifier les mots-clés de la pellicule

Ouvre `src/components/FilmStrip.tsx` et édite le tableau `KEYWORDS` en haut du fichier.

### Changer la langue par défaut

Dans `src/lib/i18n.tsx`, remplace `useState<Lang>("fr")` par `useState<Lang>("en")`.

---

Made with ❤ by Miali · © 2026
