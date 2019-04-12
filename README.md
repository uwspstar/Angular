# Angular 
- Angular [https://angular.io](https://angular.io)
- Angular 6 with Angular Cli 6 [https://www.ngdevelop.tech/angular-cli-6-angular-material-6-features/]

## Requirement (Recommend )

- 1 . Download VS Code [https://code.visualstudio.com/download](https://code.visualstudio.com/download)

- 2 . Install Git from [https://git-scm.com/](https://git-scm.com/)

- 3 . Install sourctree from [https://www.sourcetreeapp.com/](https://www.sourcetreeapp.com/)

- 4 . Install nodejs from [https://nodejs.org/en/](https://nodejs.org/en/)

- 5 . Install Angular Cli from [https://cli.angular.io/](https://cli.angular.io/)

## Angular files
![Angular files](/angularfiles.jpg)

## Angular Cli Command line

```javascript

$ ng new demoMT --style=scss --routing

//Build Optimizer v5 $ ng build --prod
$ ng build --prod --aot=true --build-optimizer.


$ ng g c ui/header --dry-run

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
    },
    "git.ignoreMissingGitWarning": true,
    "files.associations": {
        "*.json": "jsonc"
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

//https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2
- Angular v5 Snippets
```
## Generic
- data.service.ts
```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService<T> {

  constructor(private url, private http: HttpClient) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }
}
```
- product.service.ts
```
import { DataService } from './../data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../interface/product';


const URL = "mockdata/products.json";

@Injectable()
export class ProductService extends DataService<Product> {

  constructor(http: HttpClient) {
    super(URL, http);
  }
}
```
- product.component.ts
```
products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.productService.getAll()
      .subscribe(data => this.products = data);
  }
``
## 4 Ways to share the data between components
- @Input() myProperty;
Declares an input property that you can update via property binding (example: <my-cmp [myProperty]="someExpression">).

- @Output() myEvent = new EventEmitter();	
Declares an output property that fires events that you can subscribe to with an event binding (example: <my-cmp (myEvent)="doSomething()">).

- @ViewChild(myPredicate) myChildComponent;	
Binds the first result of the component view query (myPredicate) to a property (myChildComponent) of the class. Not available for directives.

- @ViewChildren(myPredicate) myChildComponents;	
Binds the results of the component view query (myPredicate) to a property (myChildComponents) of the class. Not available for directives.

- @rxjs Subject

## Dependency injection configuration	
- { provide: MyService, useClass: MyMockService }	
Sets or overrides the provider for MyService to the MyMockService class.

- { provide: MyService, useFactory: myFactory }	
Sets or overrides the provider for MyService to the myFactory factory function.

- { provide: MyValue, useValue: 41 }	
Sets or overrides the provider for MyValue to the value 41.


## Directive

```javascript

<tr *ngFor="let hero of heroes; let i = index">
    <td>{{hero.name}}</td>
    <td>{{i}}</td>
</tr>

```
## Mat-table DataSource, Paginator , Sort
```
  // component page 
  dataSource: MatTableDataSource<ConfigSet>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ...
  
  ngOnInit(): void {
    this.configSet.getConfigSetList()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  
  // service page
  ...
  import { Observable } from 'rxjs/Observable';
  import { HttpClient } from '@angular/common/http';

  ...
  constructor(private http: HttpClient) { }

  getConfigSetList(): Observable<ConfigSet[]> {
    return this.http.get<ConfigSet[]>(URL_CONFIGSETS);
  }
```
## Rxjs import
```

// HttpClient default return json, DO NOT need map(res=>res.json())

import { Rx } from 'rxjs/Rx';

//Observable, Observer, BehaviorSubject, Subject, ReplaySubject
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw'
- Observable.throw
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import {Observer} from 'rxjs/Observer';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {ReplaySubject} from 'rxjs/ReplaySubject';

import { concat,empty } from 'rxjs/observable';

Observable.from()
Observable.of()

import { map } from 'rxjs/add/operator/map';
import { switchMap } from 'rxjs/add/operator/switchMap';
import { catch } from 'rxjs/add/operator/catch';



/*
audit, buffer, catch, combineAll, combineLatest, concat, count, debounce, delay, 
distinct, do, every, expand, filter, finally, find , first, groupBy,
ignoreElements, isEmpty, last, let, map, max, merge, mergeMap, min, pluck, 
publish, race, reduce, repeat, scan, skip, startWith, switch, switchMap, take, 
takeUntil, throttle, timeout, toArray, toPromise, withLatestFrom, zip
 */

```
## add the data to the top of Array
```
data => this.arrayData = [data, ...this.arryData];

- Add to the end of an Array

var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]
- Remove from the end of an Array

var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];
- Remove from the front of an Array

var first = fruits.shift(); // remove Apple from the front
// ["Banana"];
- Add to the front of an Array

var newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"];
- Find the index of an item in the Array

fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

var pos = fruits.indexOf('Banana');
// 1
- Remove an item by index position

var removedItem = fruits.splice(pos, 1); // this is how to remove an item
                                        
// ["Strawberry", "Mango"]

```
## material stepper back to step 0
```
<mat-horizontal-stepper [linear]="true" #stepper>
...
  @ViewChild('stepper') stepper;
...
this.stepper.selectedIndex = 0;

```
## Pass value to  Open Dialog

- ConfigurationSetsDetailComponent is the dialog windown
```
import { MatDialog } from '@angular/material';
constructor(private configSet: ConfigSetService, private dialog: MatDialog) { }

onDetailOpenDialog(id, name) {
    this.dialog.open(ConfigurationSetsDetailComponent, {
      data: {
        configSetId: id,
        configSetName: name
      }
    }).afterClosed()
      .subscribe(
      result => console.log(result),
      err => console.log('err : ConfigurationSetsComponent > onOpenDialog'),
      () => console.log('Complet'));
  }
```
-  ConfigurationSetsDetailComponent.ts
```
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
... 

constructor(private config: ConfigFileService,
    public dialogRef: MatDialogRef<ConfigurationSetsDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public input: any) {
    // console.log(data);
  }
```

```
## Security
```
-  Frontend security is great for the user experience, but does not provide real security. Backend database rules is the only way to truly protect your data.

```
## Data Binding

- @output // from ts ->html
- @input  // html -> ts

```
  @Input() count = 0;
  @Output() countChange = EventEmitter<number>();

  onIncrement() {
    this.count++;
    this.countChange.emit(this.count);
  }
  
  ...
  <p>
    Count: {{ count }}
    <button (click)="onIncrement()">Increment</button>
  </p>
```  

- porperty binding
```
<div $ngFor="let item of items; let i = index">
 <app-card [inputItem]="item"></app-card>
</div>

... app-card ts

 @Input('inputItem') inputItem :any;
 
```
## ChangeDetectorRef
```

if your service call on ngOnInit() not display load data in html page, just call detectChanges() method to manually run change detection:


private cdr: ChangeDetectorRef
// After you load data in OnInit(), just call detectChanges() method to manually run change detection:

this.cdr.detectChanges();

for example:
ngOnInit() {
this.publish.getUnpublishedEnviromentByPackageID(this.setConfigID)
      .subscribe(
      (data) => {
        this.enviroments = data as (Array<Enviroment>);
        this.cdr.detectChanges(); //detectChange
      },
      (err) => {
        this.alertService.error('error on find the publish envirment');
        this.router.navigate(['/']);
      }
      );
 }
```
## FormsModule is Required for Two-Way-Binding! : 

```javascript

Important: For Two-Way-Binding to work, you need to enable the ngModel  directive. This is done by adding the FormsModule  to the imports[]  array in the AppModule.

You then also need to add the import from @angular/forms  in the app.module.ts file:

import { FormsModule } from '@angular/forms'; 

```
# Others Resource

### Document
[https://compodoc.github.io/website/](https://compodoc.github.io/website/)

### Themes
- materialpalette [https://www.materialpalette.com](https://www.materialpalette.com)

### Backend Service
- json-server [https://github.com/typicode/json-server](https://github.com/typicode/json-server)

### Online Placeholder
- JSONPlaceholder [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)
- Images Placeholder [http://lorempixel.com/](http://lorempixel.com/)

### Document Tool
- Swagger Codegen Document Tool [https://swagger.io/](https://swagger.io/)

### YouTube 
- [Angular Firebase](https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA/featured)
- [Angular University](https://www.youtube.com/channel/UC3cEGKhg3OERn-ihVsJcb7A)

### Udemy
- [The Complete Angular Course: Beginner to Advanced](https://www.udemy.com/the-complete-angular-master-class/learn/v4/overview)

### website

`Jasonwatmore`
- [notifications](http://jasonwatmore.com/post/2017/06/25/angular-2-4-alert-toaster-notifications)
- [communicating-between-components](http://jasonwatmore.com/post/2016/12/01/angular-2-communicating-between-components-with-observable-subject)


### Error handler

```
import { ErrorHandler } from '@angular/core'

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {

        //TO DO log error to server 
        console.log(error);
    }
}

...
//app.module.ts

```

### HashLocationStrategy vs PathLocationStrategy

[HashLocationStrategy vs PathLocationStrategy](https://codecraft.tv/courses/angular/routing/routing-strategies/)


### Exception
- `Expression has changed after it was checked`

```
 // use ChangeDetectorRef on ngAfterViewChecked
 import { Component, OnInit, ViewChild, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
 ...
 setName: string = "";
 selectFiles = [];
 newConfigSet;
 ...
 
 constructor(private cdRef: ChangeDetectorRef) { }

 ngAfterViewChecked() {

    this.newConfigSet = [{ "setName": this.setName }, { "selectFiles": this.selectFiles }];
    this.cdRef.detectChanges();
  }
```

- Angular 2 Expression Changed after It Has Been Checked Exception
```
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush, // this is import { ChangeDetectionStrategy } from '@angular/core';

  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
```
