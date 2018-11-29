# Dojos Redux
## Contexte
Cette application comporte 2 composants principaux, `Students` et `Friends`.
Lors du démmarage de l'app, une requête est lancé sur https://jsonplaceholder.typicode.com/users afin de récupérer une liste de `users` (`students`).
Pour chaque `student` il y a un boutton qui permet d'ajouter le `student` selectionné à une `friendsList`. Enfin, il est aussi possible de retirer un `friend` de la `friendsList`
## Exercice
C'ette application n'utilise pas `redux` et est donc obligé de faire remonter les données au parents qui doit à sont tour les transmettre à l'enfant concerné à l'aide des `props`

Le but est donc de supprimer tout ce flux entre parents en enfants et d'utiliser `redux`et son `store` pour la transmitions des données