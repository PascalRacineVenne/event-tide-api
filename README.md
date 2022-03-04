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

## Voici les outils utilisés durant l'implémentation de ce projet:

* Ruby version 3.0.3
* Rails version 6.1.4.6
* React version 17.0.2
* Webpacker version 4.46.0



### System dependencies

J'ai utilisé le [gem 'jsonapi-serializer'](https://github.com/jsonapi-serializer/jsonapi-serializer) pour la sérialisatiion des données.

J'ai utilisé le [react-datepicker: "^4.7.0"](https://reactdatepicker.com/) pour la gestion des calendriers.

J'ai utilisé [styled-components: "^5.3.3"](https://styled-components.com/) pour la gestion du styling du projet.

J'ai utilisé [axios: "^0.26.0"](https://axios-http.com/) pour la gestion des promesses.


### Database creation

Postgresql est utilisé comme base de données pour Active Record
Un **seed** file est disponible populer la base donnée.

* Database initialization
Pour initialiser le database, simplement faire:

> **rails db:seed db:migrate**

### Comment effectuer les tests

J'ai utilisé le [gem 'rspec-rails', '~> 5.0.0'](https://github.com/rspec/rspec-rails) pour construire mes tests files.

Pour effectuer les tests depuis le terminal, simplement taper: 
> **rspec**


