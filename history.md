# History

## V. 0.1.0

**25/08/16** - Publication of new version

- Utilisation de AngularJS et ui-bootstrap
- Ajout du changement direct de documentstation
- Ajout du changement de langue (définies dans _js/config.js_)
- Ajout de la gestion des menus "about" et "help" via des fenêtres modales
- Amélioration de la gestion des paramètres d'URL
- Génération directe d'un permalink de la documentation consultée (ne prends pas en compte la page)


## V. 0.0.4

**11/08/16**

- Ajout de la configuration via des paramètres d'URL: `header`, `footer` et `sidebar`

**12/08/16**

- Amélioration de la gestion des paramètres d'URL
- Modification de _js/config.js_ afin de pouvoir lire plusieurs documentations à partir d'une même instance de mkd-docreader
- Ajout du paramètre d'URL `docname` pour changer de documentation à la volée


## V. 0.0.3

**10/08/16**

- Ajout de la capacité à afficher un dépôt GitHub
- Ajout de la capacité à afficher un GitBook
- Abandon de la bibliothèque "parsedown.php" et remplacement par "showdown.js"


## V. 0.0.1 - version initiale

**08/08/16**

- Initialisation de l'application
- Mise en place de l'interface initiale

**09/08/16**

- Création de _php/index.php_ pour servir de proxy "cross domain" et convertir les pages via la bibliothèque "parsedown.php"
- Ajout de la capacité afficher un wiki GitHub
