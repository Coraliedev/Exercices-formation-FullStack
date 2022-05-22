# Storage API

## Local Storage

Le Local Storage enregistre les informations sur une base de données clé-valeur interne au navigateur.
Fermer le navigateur ne réinitialise pas ces données.
Cas d'utilisation :

- Préférence d'utilisation du site
- Préférences d'apparences et thèmes
- Autres informations à enregistrer localement

### Création d'une todoListe

1. Creation d'une page html avec un titre.
2. Ajouter un formulaire pour ajouter des taches avec un bouton de validation.
3. Ajouter une liste vide.
4. Ajouter un bouton qui servira à supprimer la liste.

### Récupération de vos taches et affichages

1. Créer votre fichier js.
2. Identifier et récupérer vos éléments DOM.
3. Créer une liste vide qui servira à stocker vos taches.
4. À la validation de votre formulaire récupérer la tache à enregistrer et vider le formulaire.
5. Ajouter la tache à votre liste
6. Afficher vos taches en les insérant dans votre fichier html.

### Enregistrement en mémoire locale et récupération

1. Créer une fonction pour enregistrer
2. Récupération de la liste en mémoire locale au chargement de la page.
Ne pas oublier d'afficher la liste récupérée au chargement de la page.

### Effacer la mémoire locale

1. Créer un bouton et le relier à une fonction pour effacer la liste.
2. Penser à vider la liste.
3. Penser à vider le stockage en mémoire.
4. Retirer chaque élément supprimé de l'affichage.

## Session Storage

Le stockage en session a une durée de vie plus courte que le Local Storage.
Démonstration de l'utilisation du Session Storage avec un changement de couleur de fond stockée en Session Storage.
Cas d'utilisation :

- Panier sur un site de e-commerce
- Vérifier si un utilisateur a lu une notification du site

### Implémenter la page html

1. Créer une entrée pour choisir une couleur.
2. Ajouter une checkbox pour valider la mise en Session Storage.
3. Ajouter un bouton pour supprimer la Session Storage.

### Récupération et application de la couleur

1. Créer votre fichier js.
2. Identifier et récupérer vos éléments DOM.
3. Créer une couleur de fond initiale.
4. À la sélection de votre couleur, récupérée là pour l'appliquer en fond de page.

### Détecter la checkbox enregistrer le changement de couleur en Session Storage

1. Détecter la checkbox
2. Enregistrer en Session Storage la couleur.
3. Modifier l'application de votre couleur selon l'état de la checkbox pour l'enregistrer.

### Récuperer la couleur en session storage au chargement et effacement

1. creer une fonction qui recupere la couleur en Session Storage.
2. Attribuer une couleur par défaut s'il n'y en a pas en mémoire.
3. Appliquer cette couleur et l'afficher.
4. Créer un bouton et le relier à une fonction pour supprimer la Session Storage.

```js
let color = "#ffffff";
```
