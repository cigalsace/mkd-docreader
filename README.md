# Markdown Doc Reader

Application web pour lire les documentations Markdown, notamment gérées via GitHub(dépôt GitHub, wiki GitHub ou GitBook).
Fonctionne aussi avec un simple dossier contenant des fichiers Markdown.

## Requis

L'installation de mkd-docreader nécessite simplement un serveur PHP.
Le script PHP sert uniquement à premettre les appels "cross domain" en javascript. Il peut facilement être remplacé par un autre script ou proxy.

## Installation et configuration

Elle se fait en 2 étapes:

1. Installtion: copier l'ensemnle des fichiers sur votre serveur.
2. Configurer l'espace de stockage de la documentation dans le fichier _js/config.js_.

## Technologies et bibliothèques utilisées

### Javascript

- Jquery
- Twitter Bootstrap
- showdown

### PHP

PHP est utilisé uniquement pour premettre les appels "cross domain" en javascript.
Il peut facilement être remplacé par un autre script ou proxy.
