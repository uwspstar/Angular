import { ConfigurationSetsNewComponent } from './../configuration-sets-new/configuration-sets-new.component';
import { ConfigurationSetsDetailComponent } from './../configuration-sets-detail/configuration-sets-detail.component';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ConfigSet } from '../../../shared/interface/configset';
import { ConfigService } from '../../../shared/service/data/config.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-configuration-sets',
  templateUrl: './configuration-sets.component.html',
  styleUrls: ['./configuration-sets.component.scss']
})
export class ConfigurationSetsComponent implements OnInit {

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

  onDetailOpenDialog() {
    this.dialog.open(ConfigurationSetsDetailComponent)
      .afterClosed()
      .subscribe(
      result => console.log(result),
      err => console.log("err : ConfigurationSetsComponent > onOpenDialog"),
      () => console.log("Complet"));
  }

  onNewSetOpenDialog() {
    this.dialog.open(ConfigurationSetsNewComponent)
      .afterClosed()
      .subscribe(
      result => console.log(result),
      err => console.log("err : ConfigurationSetsComponent > onOpenDialog"),
      () => console.log("Complet"));
  }
}


