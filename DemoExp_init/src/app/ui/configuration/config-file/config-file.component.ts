import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ConfigSet } from '../../../shared/interface/configset';
import { ConfigService } from '../../../shared/service/data/config.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Config } from '../../../shared/interface/config';

@Component({
  selector: 'app-config-file',
  templateUrl: './config-file.component.html',
  styleUrls: ['./config-file.component.scss']
})
export class ConfigFileComponent implements OnInit {

  checked = false;

  displayedColumns = ['id', 'name', 'status', 'action'];
  dataSource: MatTableDataSource<Config>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.config.getConfigList()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
