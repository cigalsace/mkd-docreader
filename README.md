# Markdown Doc Reader

Application web pour lire les documentations gérées via GitHub (dépôt GitHub, wiki GitHub ou GitBook) ou accessibles directement dans un simple dossier contenant des fichiers Markdown.

Elle permet de séparer la gestion et la consultation de la documentation en unifiant la présentation et facilite son intégration dans des iframes.


## Fonctionnalités principales

Consultation de documentations Markdown gérées sous:
- Dépôt GitHub
- Wiki GitHub
- GitBook
- Dossier contenant des fichiers accessible via HTTP

Cett application:
- Permet de gérer et d'accéder à plusieurs documentations différentes (paramétrage des espaces de stockage via un fichier de configuration).
- Prend en charge le multilinguisme tel que proposé par GitBook (un dossier par langue à la base du dépôts).
- Est paramétrable via l'URL (affichage ou non des header, footer et sidebar) pour faciliter l'intégration via iframe.


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
- `docname`: nom de la documentation à afficher tel que définie dans _js/config.js_


## Choix techniques et développement

Les choix sont réalisés afin que:

- L'application soit moderne dans son graphisme et ses fonctionnalités
- L'application reste légère et maintenable
- L'application n'impose pas d'exigences particulières pour l'installation et l'utilisation
- L'application puisse fonctionner en mode connecté et déconnecté
- L'application ne nécessite pas d'authentification (possibilité d'ajouter une authentification HTTP côté serveur si nécessaire)

### Langages utilisés

- JS, HTML et CSS côté interface utilisateur
- PHP (proxy "cross domain" pour l'accès aux fichiers distants)
- Markdown pour la documentation

### Frameworks et bibliothèques utilisés

- [twitter bootstrap](http://getbootstrap.com/) - version 3.3.7
- [angular js](https://angularjs.org/) - version 1.5.8
- [ui-bootstrap](https://angular-ui.github.io/bootstrap/) - version 2.1.0
- [showdown](https://github.com/showdownjs/showdown) - version 22-07-2015


## Démo

Cf. <http://www.cigalsace.net/mkd-docreader/0.1.0> pour consulter consultation en direct du wiki du module cadastrapp de georchestra (<http://github.com/georchestra/cadastrapp/wiki>).
Cf. <http://www.cigalsace.net/mkd-docreader/0.1.0/index.html?sidebar=0&docname=mkd-docreader> pour consulter cette page de documentation.
