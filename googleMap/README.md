# GoogleMap
[GoogleMap](https://angular-maps.com/)

[API key](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key) 

```html
$ npm install @agm/core --save

// app.modules.ts
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCga7txY0BOZvZYCqGzX-J3dtK3kGZ...'
    })
  ],

// app.component.html
<agm-map [latitude]="lat" [longitude]="lng" (mapClick)='OnChooseLocation($event)'>
  <agm-marker [latitude]="lat" [longitude]="lng" *ngIf='location'></agm-marker>
</agm-map>

// app.module.ts
export class AppComponent {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  location = false;

  OnChooseLocation(event) {
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.location = true;
  }
}


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
