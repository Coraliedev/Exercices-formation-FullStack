# API HTML_Media_Element

Cette API fournit des fonctionnalités qui permettent de controller des lecteurs audio et vidéo avec JavaScript.
Elle prend en charge aussi bien les formats videos que audios.

## Création de la page HTML

1. Creation d'une page html basique.
2. Ajouter une balise vidéo contenante :
-Une balise pour definir la source de votre media_élément (video ou audio).
Pour l'exercice :

```url
https://test-videos.co.uk/bigbuckbunny/mp4-h264
```

-Un contenu texte qui s'affichera si la source ne fonctionne pas.
3. Création des contrôles basiques d'un bouton play/pause et d'un bouton range pour gérer la vitesse de lecture.

## Ajout du css

1. Ajout d'un style pour gérer le média (à votre convenance).

## Gestion de l'élément en JavaScript

1. Créer un fichier JavaScript et implémenter le script sur votre page html.
2. Récupération des éléments DOM.
3. Écouter les boutons play/pause et pbInput
4. Créer une fonction pour gérer l'action du bouton play/pause.
5. Créer une fonction pour gérer la vitesse de lecture avec le bouton pbInput.
6. Gestion de la fin de la vidéo : remettre le bouton en cours de lecture (pause) sur lecture (play).
