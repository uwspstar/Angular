import { Component } from '@angular/core';
import { environment } from '../environments/environment';


const API_URL = environment.apiUrl;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = API_URL;


}
