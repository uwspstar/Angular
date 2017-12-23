# Angular 

## Requirement (Recommend )

- 1 . Download VS Code [https://code.visualstudio.com/download](https://code.visualstudio.com/download)

- 2 . Install Git from [https://git-scm.com/](https://git-scm.com/)

- 3 . Install sourctree from [https://www.sourcetreeapp.com/](https://www.sourcetreeapp.com/)

- 4 . Install nodejs from [https://nodejs.org/en/](https://nodejs.org/en/)

- 5 . Install Angular Cli from [https://cli.angular.io/](https://cli.angular.io/)

## Angular Cli Command line

```javascript

$ ng new demoMT --style=scss --routing

$ ng g c ui/header --dry-run

$ ng g s services/backendApi --module=app.module

$ ng g s services/backendApi --module=app.module

// with special moule
$ ng g s services/backendApi --module=services/services.module 


```

## Angular 5 +  Angular Material INIT

```javascript

// Get the latest @angular/cli
$ ng -v
$ npm install @angular/cli@latest —save
$ ng -v

// create a new project : demoMT
$ ng new demoMT --style=scss --routing
$ cd demoMT
$ code . //open with vscode

// install material
// $ npm install --save @angular/material @angular/cdk
$ npm install @angular/material@latest --save
$ npm install @angular/cdk@latest --save
$ npm install @angular/animations@latest --save 


// package.json
 
 "dependencies": {
    "@angular/animations": "^5.1.1",
    "@angular/cdk": "^5.0.1",
    "@angular/common": "^5.0.0",
    "@angular/compiler": "^5.0.0",
    "@angular/core": "^5.0.0",
    "@angular/forms": "^5.0.0",
    "@angular/http": "^5.0.0",
    "@angular/material": "^5.0.1",
    "@angular/platform-browser": "^5.0.0",
    "@angular/platform-browser-dynamic": "^5.0.0",
    "@angular/router": "^5.0.0",
    "core-js": "^2.4.1",
    "rxjs": "^5.5.2",
    "zone.js": "^0.8.14"
  },
  "devDependencies": {
    "@angular/cli": "1.6.1",
    "@angular/compiler-cli": "^5.0.0",
    "@angular/language-service": "^5.0.0",
    "@types/jasmine": "~2.5.53",
    "@types/jasminewd2": "~2.0.2",
    "@types/node": "~6.0.60",
    "codelyzer": "^4.0.1",
    "jasmine-core": "~2.6.2",
    "jasmine-spec-reporter": "~4.1.0",
    "karma": "~1.7.0",
    "karma-chrome-launcher": "~2.1.1",
    "karma-cli": "~1.0.1",
    "karma-coverage-istanbul-reporter": "^1.2.1",
    "karma-jasmine": "~1.1.0",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.1.2",
    "ts-node": "~3.2.0",
  }



//for moblie
$ npm install hammerjs
//import 'hamemrjs' in main.ts page
import 'hammerjs'


//http://localhost:4200/
$ ng serve

// .angular-cli.json 
"styles": [
  "styles.scss"
]

//styles.css
//@import '~@angular/material/theming';
// find the prebuild themes inside node_modules@angular/material/prebuilt-themes
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
@import url('//fonts.googleapis.com/icon?family=Material+Icons'); 



@include mat-core();

$primary: mat-palette($mat-lime, 500);
$accent:  mat-palette($mat-lime, 500, A200, A400);
$warn:    mat-palette($mat-red, 500);

$theme: mat-light-theme($primary, $accent, $warn);
@include angular-material-theme($theme);

body {
    font-family: $mat-font-family;
}

// TEST :  import MatButtonModule in the app.module.ts
import { MatButtonModule } from '@angular/material/button';

// add test button to app.component.html page
<button mat-raised-button>Basic</button>
<button mat-raised-button color='primary'>Basic</button>
<button mat-raised-button color='accent'>Basic</button>

// run
$ng serve

//create a new material module, remove material to app-material module
$ ng g module material --dry-run

// material.Module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    MatButtonModule
  ]
})
export class MaterialsModule { }

```

## VS Code settings.json

```javascript
{
    "workbench.sideBar.location": "right",
    "window.zoomLevel": 2,
    "vsicons.projectDetection.autoReload": true,
    "workbench.iconTheme": "vscode-icons",
    "editor.formatOnSave": true,
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "node_modules": true
    },
    "workbench.colorCustomizations": {
        "terminal.foreground": "#00FD61",
        "terminal.background": "#383737"
    }
}


```
## VS Code Extensions

```javascript
- Angular Material 2, Flex layout 1
- Angular v4 TypeScript Snippets
- ASP.NET Helper
- Auto Import
- Bracket Pair Colorizer
- C#
- C# Extensions
- Docker
- JS-CSS-HTML Formatter
- Move TS
- mssql
- Path Intellisense
- REST Cliet
- TSLint
- TypeScript Hero
- vscode-icons


```
