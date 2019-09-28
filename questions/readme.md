### Which of the following statements about components in Angular are correct? ```BCF```

(Select all acceptable answers.)

1) The properties of a component's children are available in the component's constructor.
2) When a component depends on a service, the injector can be used to configure  dependency injection.
3) A component defines its input parameters with the @Input decorator.
4) A component is a type of directive and as such, should be defined by the Directive class decorator.
5) A component selector must reference the class name in lowercase hyphenated format.
6) A components ngOnDestroy method is called just before Angular destroys the component.

### Consider the following application module: ```CD```
```
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from './home.component';
import { ItemDetailComponent }  from './item-detail.component';
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent },
    { path: 'detail/:id', component: ItemDetailComponent, outlet: 'route1' }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
Which of the following statements about the routers behavior are correct?
```
(Select all acceptable answers.)

1) The home component can only be accessed via the root URL redirect.
2) The id parameter is optional when a call is made to the /detail/ URL.
3) Optional parameters can be passed to any component via the query parameters of the ActivatedRoute.
4) /detail/100 will use the <router-outlet name='route1'> to determine the position of the view.
5) Route that redirects to HomeComponent would activate on same routes if the pathMatch: 'full' property was removed.

### Consider the following components: one-way binds
```
export class Address {
  street: String;
  city: String;
  zipCode: String;
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() address: Address;
  constructor() { }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  @Input() addresses: Address[];
  constructor() { }

  ngOnInit() {
  }
}
```
Below is the file address-list.component.html. Fill in the blanks, so that the template renders one li element per address and it correctly one-way binds each address to the AddressComponent field.
```
<ul>
  <li *ngFor="let address of addresses">
    <app-address [address]="address"></app-address>
  </li>
</ul>
```
