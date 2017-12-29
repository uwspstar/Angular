import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration-sets-detail',
  templateUrl: './configuration-sets-detail.component.html',
  styleUrls: ['./configuration-sets-detail.component.scss']
})
export class ConfigurationSetsDetailComponent implements OnInit {

  selectSet = [
    {
      "id": 1,
      "name": " Purchase Bonus Wheel",
      "status": "YES"
    },
    {
      "id": 2,
      "name": "Daily Bonus Wheel",
      "status": "NO"
    }
  ];

  constructor() { }

  ngOnInit() {

  }

}
