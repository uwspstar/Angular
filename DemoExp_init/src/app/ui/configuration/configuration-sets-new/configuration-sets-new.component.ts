
import { ConfigService } from './../../../shared/service/data/config.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Config } from './../../../shared/interface/config';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-configuration-sets-new',
  templateUrl: './configuration-sets-new.component.html',
  styleUrls: ['./configuration-sets-new.component.scss']
})
export class ConfigurationSetsNewComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  setName: string = "";

  selectFiles = [];

  isChecked: boolean = false;

  displayedColumns = ['id', 'name'];
  dataSource: MatTableDataSource<Config>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private fb: FormBuilder, private config: ConfigService) { }

  ngOnInit() {

    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this.fb.group({
      secondCtrl: [this.selectFiles.length, Validators.required]
    });


    this.config.getConfigList()
      .subscribe(data => {
        data = data.filter(d => d.status == "YES");// Only display active config files
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
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
