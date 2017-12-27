import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mode = new FormControl('side'); // side,mode
  isFlag: boolean = true;


  ngOnInit(): void {
    console.log('environment = ' + environment.environment_Info);
  }

  onNavMenu() {
    this.isFlag = !this.isFlag;
  }

}
