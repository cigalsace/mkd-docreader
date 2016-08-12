# Markdown Doc Reader

Application web pour lire les documentations gérées via GitHub (dépôt GitHub, wiki GitHub ou GitBook) ou accessibles directement dans un simple dossier contenant des fichiers Markdown.

Elle permet de séparer la gestion et la consultation de la documentation en unifiant la présentation. Elle facilite aussi l'intégration dans des iframes (les "header" et "footer" du site peuvent être désactivés via le fichier de configuration ou des paramètres d'URL).

A noter que le fichier de configuration permet de paramétré plusieurs espaces de stockéges (documentations) utilisables à partir d'une seule instance de mkd-docreader.

## Prérequis

L'installation de mkd-docreader nécessite un serveur PHP. Le script PHP premet les appels "cross domain" en javascript. Il peut facilement être remplacé par un autre script.

## Installation et configuration

Elle se fait en 2 étapes:

1. Installation: copier l'ensemble des fichiers sur votre serveur.
2. Configuration: les espaces de stockage des documentations sont définis dans le fichier _js/config.js_ (variable "docs").

## Paramètres d'URL

Pour faciliter l'utilisation de mkd-docreader, notamment dans des iframes, plusieurs paramètres peuvent être modifiés via l'URL:

- `header`: `false` ou `0` pour désactiver le header; une autre valeur pour l'activer
- `footer`: `false` ou `0` pour désactiver le footer; une autre valeur pour l'activer
- `sidebar`: `false` ou `0` pour désactiver le sidebar (menu); une autre valeur pour l'activer
- `docname`: nom de la documentation à afficher tel que défini dans _js/config.js_

## Technologies et bibliothèques utilisées

### Javascript

- Jquery
- Twitter Bootstrap
- Showdown

### PHP

PHP est utilisé uniquement pour premettre les appels "cross domain" en javascript. Il peut facilement être remplacé par un autre script ou proxy.

## Démo

Cf. <http://www.cigalsace.net/mkd-docreader/0.0.4> pour consulter consultation en direct du wiki du module cadastrapp de georchestra (<http://github.com/georchestra/cadastrapp/wiki>). Cf. <http://www.cigalsace.net/mkd-docreader/0.0.4/index.html?sidebar=0&docname=mkd-docreader> pour consulter cette page de documentation.
