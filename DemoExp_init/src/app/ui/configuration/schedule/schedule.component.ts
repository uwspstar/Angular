import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ConfigSet } from '../../../shared/interface/configset';
import { ConfigService } from '../../../shared/service/data/config.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  displayedColumns = ['name', 'status', 'breakingChang', 'lastUpdatedBy', 'lastUpdateDate', 'publish', 'action'];
  dataSource: MatTableDataSource<ConfigSet>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private configSet: ConfigService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.configSet.getConfigSetList()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.toLocaleLowerCase().trim();
  }

}
