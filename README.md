# Kawasushi Meknès — Sushi & Wok

Site web officiel de **Kawasushi Meknès** (Riad Ismailia, Im. 508 Mag. 4, Meknès 50000) avec carte interactive, panier de commande directe vers WhatsApp (`07 19 26 02 51`), fiches menu originales et réservation de table.

## Déploiement sur GitHub & Netlify

Ce projet est configuré pour fonctionner directement sur **Netlify** via **GitHub** (`netlify.toml` et `public/_redirects` inclus).

### 1. Publier sur GitHub
```bash
git init
git add .
git commit -m "Initial commit - Kawasushi Meknes"
git branch -M main
git remote add origin https://github.com/<votre-compte>/kawasushi-meknes.git
git push -u origin main
```

### 2. Déployer sur Netlify
1. Connectez-vous sur [app.netlify.com](https://app.netlify.com) et cliquez sur **Add new site → Import an existing project**.
2. Sélectionnez **GitHub** et choisissez votre dépôt `kawasushi-meknes`.
3. Netlify détecte automatiquement `netlify.toml` :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
4. Cliquez sur **Deploy site**.

## Développement local
```bash
npm install
npm run dev
```

Pour générer le dossier statique `dist/` :
```bash
npm run build
```
