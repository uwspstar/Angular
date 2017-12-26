# Jsonserverdemo

- npm install json-server --save

- in the root directory of our application, create a file called `db.json`
```javascript
{
  "products": [
    {
      "id": 1,
      "name": "product cSharp-abc",
      "price": 10
    },
    {
      "id": 2,
      "name": "product javscript-xyz",
      "price": 200
    },
    {
      "id": 3,
      "name": "product angular-v5",
      "price": 1000
    }
  ]
} 
```
- add a script to package.json to start our back-end:
```javascript
"scripts": {
  ...
  "json-server": "json-server --watch db.json"
}
```
- npm run json-server

- navigate your browser to http://localhost:3000/products

```javascript
GET /products: get all existing todo’s
GET /products/:id: get an existing todo
POST /products: create a new products
PUT /products/:id: update an existing todo
DELETE /products/:id: delete an existing todo

```

-  our API URL to both environment files:

```javascript
// environment.ts
export const environment = {
  production: false,

  // URL of development API
  apiUrl: 'http://localhost:3000'
};
```

- get the API URL from our environment 
```javascript
import { environment } from 'environments/environment';

...
const API_URL = environment.apiUrl;
```

## Base
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
