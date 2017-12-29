import { ConfigService } from './../../shared/service/data/config.service';
import { Config } from './../../shared/interface/config';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, AfterViewChecked, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit, AfterViewChecked {

  setName: string = "";
  selectFiles = [];

  newConfigSet = {
    "setName": this.setName,
    "selectFiles": this.selectFiles
  };

  isChecked: boolean = false;
  selectSet: string;
  selectEnviroment: string;

  enviroments = [
    'DEV-1',
    'DEV-2',
    'QA - 1',
    'QA - 2',
    'HOTFIX',
    'PROD',
    'STAGING'
  ];

  displayedColumns = ['id', 'name'];
  dataSource: MatTableDataSource<Config>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private fb: FormBuilder, private config: ConfigService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {

    this.config.getConfigSetList()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  ngAfterViewChecked() {

    this.newConfigSet = {
      "setName": this.setName,
      "selectFiles": this.selectFiles
    };
    this.cdRef.detectChanges();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelectFile(id: string, name: string, ev) {

    if (ev.checked) {
      this.selectFiles.push({ "id": id, "name": name });
    } else {
      let i = this.selectFiles.indexOf(id);
      this.selectFiles.splice(i, 1);
    }
  }

}
