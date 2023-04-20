# restaurant-app Quai Antique

Dans le cadre d'un ECF j'ai développé une application avec le framework Angular.
[Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Description du projet
Il s'agit d'une application web permettant à un administrateur de présenter ses recettes culinaires
mais aussi les modifier. C'est aussi un site vitrine qui a pour objectif de donner envie aux utilisateurs de réserver des tables.
L'administrateur pourra aussi modifier les horaires présent sur chaque pages.
Un espace de connexion est aussi présent pour les utilisateurs.

## Fonctionnalités
J'ai intégré ces fonctionnalités sur le site :
• Une galerie d'images éditable sur la page d'accueil.
• Un portail de connexion (login pour l'admin et pour des utilisateurs (client)).
• Un bouton de réservation sur la page d'accueil (modal).
• Une gestion des places en fonction des horaires lors de la réservation (fonctionnalité qui sera implémenté plus tard)
• Les boutons d'éditions des recettes (modifier, supprimer et ajouter) sont masqués en fonction du role de l'utilisateur (localStorage).
  Seul l'admin peut les voir et éditer les recettes sur la galerie.
• Page d'affichage de la carte (recettes proposées) par catégorie (gestion des routes).
• Page avec les menus proposés
• Page de contact

## Informations authentification
2 profils users pour tester l'autentification login :
email: Mathieu@mail.com ; password: 123 ; role 'admin'
email: alexandra@mail.com ; password: abc ; role 'client'

## Problèmes à résoudre
Par défaut en arrivant sur la page home (accueil) le bouton de connexion propose de se déconnecter.
Comme-ci il y avait un user déja connecté.
Le lien URL du déploiment avec Firebase affiche des éléments manquant, la galerie d'images, le bouton de connexion et les horaires sur la page home.
Lancer Angular avec le lien du dépot Git en mode développement pour avoir ces fonctionnalités cités sur la ligne au dessus 
(c'est un souci répertorié après déploiement).
Utilisation d'une réel BDD car faute de temps, j'ai utiliser le angular-in-memory-web-api afin de simuler les requetes HTTP et travailler une partie en back.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Commandes CLI server
Lancer `ng serve` pour le serveur de développement, lien http://localhost:4200/.
Lancer `ng build` pour compliler l'application en vue d'un déploiement en production.
Voir dossier '/dist'.

