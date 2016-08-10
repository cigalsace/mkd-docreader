# Markdown Doc Reader

Application web pour lire les documentations gérées via GitHub (dépôt GitHub, wiki GitHub ou GitBook) ou accessibles directement dans un simple dossier contenant des fichiers Markdown.

Elle permet séparer la gestion et la consultation de la documentation en unifiant la présentation.
Elle facilite aussi l'intégration dans des iframes (les "header" et "footer" du site peuvent être désactivés via le fichier de configuration).

## Requis

L'installation de mkd-docreader nécessite un serveur PHP.
Le script PHP premet les appels "cross domain" en javascript. Il peut facilement être remplacé par un autre script.

## Installation et configuration

Elle se fait en 2 étapes:

1. Installtion: copier l'ensemnle des fichiers sur votre serveur.
2. Configurer l'espace de stockage de la documentation dans le fichier _js/config.js_.

## Technologies et bibliothèques utilisées

### Javascript

- Jquery
- Twitter Bootstrap
- Showdown

### PHP

PHP est utilisé uniquement pour premettre les appels "cross domain" en javascript.
Il peut facilement être remplacé par un autre script ou proxy.

## démonstration

Cf. https://www.cigalsace.org/tools/mkd-docreader/ qui permet la consultation en direct du wiki du module cadastrapp de georchestra (https://github.com/georchestra/cadastrapp/wiki).
