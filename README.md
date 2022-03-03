# README

## Event Tide Api project

Voici une très simple application de gestion d’événements.

Rails gère un back-end qui est une API REST qui retourne du JSON. 
Il gère les opérations suivantes :
* Créer un événement
* Lister les événements

React gère le front-end et permet les opérations suivantes:

* Créer un événement
* Lister les événements
 
Un événement est caractérisé par son nom (32 caractères maximum), sa description et ses dates de début et de fin. Les événements peuvent avoir lieu n’importe où dans le monde, l'app prend en compte la timezone.

Voici les outils utilisés durant l'implémentation de ce projet:

* Ruby version 3.0.3
* Rails version 6.1.4.6
* React version 17.0.2
* Webpacker version 4.46.0



* System dependencies

* Configuration

* Database creation
Postgresql est utilisé comme base de données pour Active Record
Un **seed** file est disponible populer la base donnée.

* Database initialization

* Comment effectuer les tests

Depuis le terminal, simplement taper : **rspec**


* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
