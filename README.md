# Dojos Redux
## Contexte
Cette application comporte 2 composants principaux, `Students` et `Friends`.
Lors du démmarage de l'app, une requête est lancé sur https://jsonplaceholder.typicode.com/users afin de récupérer une liste de `users` (`students`).
Pour chaque `student` il y a un boutton qui permet d'ajouter le `student` selectionné à une `friendsList`. Enfin, il est aussi possible de retirer un `friend` de la `friendsList`
## Exercice
C'ette application n'utilise pas `redux` et est donc obligé de faire remonter les données au parents qui doit à sont tour les transmettre à l'enfant concerné à l'aide des `props`
## Flux actuel
![Alt text](https://g.gravizo.com/source/custom_mark10?https%3A%2F%2Fraw.githubusercontent.com%2FTLmaK0%2Fgravizo%2Fmaster%2FREADME.md)
<details> 
<summary></summary>
custom_mark10
  digraph G {
    size ="4,4";
    App.js [shape=box];
    App.js -> Students.jsx
    Students.jsx -> Student.jsx
    App.js -> Friends.jsx
    Friends.jsx -> Friend.jsx
  }
custom_mark10
</details>